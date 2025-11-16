import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === "23505") {
          toast.error("You're already on the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        setIsSuccess(true);
        toast.success("Welcome to the waitlist! 🎉");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="text-6xl">✨</div>
        <h3 className="text-2xl font-semibold text-foreground">You're on the list!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We'll notify you as soon as StyleSage launches. Get ready to transform your style journey!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="flex-1 h-12 text-base border-border focus-visible:ring-primary"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-8 bg-gradient-hero hover:opacity-90 transition-opacity border-0"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Be the first to experience AI-powered personal styling
      </p>
    </form>
  );
};
