import { WaitlistForm } from "@/components/WaitlistForm";
import { Sparkles, Smartphone, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 pt-20 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Coming Soon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              StyleSage
            </h1>
            
            <p className="text-2xl sm:text-3xl text-foreground/90 font-light">
              Your Personal AI Stylist
            </p>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get 1-on-1 advice from a style expert. Coming soon for iOS and Android.
            </p>

            {/* Waitlist Form */}
            <div className="pt-8">
              <WaitlistForm />
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
              Style Intelligence Meets Personal Touch
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Style Analysis</h3>
                <p className="text-muted-foreground">
                  Define your unique style preferences and let AI learn what makes you shine
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Body Shape Smart</h3>
                <p className="text-muted-foreground">
                  Recommendations tailored to your height and body shape for the perfect fit
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Event Ready</h3>
                <p className="text-muted-foreground">
                  Get instant outfit suggestions for any occasion, from casual to formal
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center space-y-4 p-6 rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Always Available</h3>
                <p className="text-muted-foreground">
                  Your personal stylist in your pocket, ready to help anytime, anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-hero shadow-elegant">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              Ready to Transform Your Style?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join thousands already on the waitlist for early access to StyleSage
            </p>
            <div className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xl font-bold text-foreground">StyleSage</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI-powered personal stylist, coming soon to iOS and Android
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 StyleSage. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
