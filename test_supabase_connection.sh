#!/bin/bash
# Test Supabase connection for StyleSage Waitlist

echo "🔍 Testing Supabase Connection..."
echo ""

cd "/Volumes/Satechi 2TB External/Development/StyleSage Waitlist"

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ .env file not found!"
    exit 1
fi

# Extract credentials
SUPABASE_URL=$(grep VITE_SUPABASE_URL .env | cut -d '=' -f2 | tr -d '"')
SUPABASE_KEY=$(grep VITE_SUPABASE_PUBLISHABLE_KEY .env | cut -d '=' -f2 | tr -d '"')

echo "📋 Configuration:"
echo "   URL: $SUPABASE_URL"
echo "   Key: ${SUPABASE_KEY:0:30}..."
echo ""

# Test connection using curl
echo "🧪 Testing API connection..."
RESPONSE=$(curl -s -w "\n%{http_code}" \
  -H "apikey: $SUPABASE_KEY" \
  -H "Authorization: Bearer $SUPABASE_KEY" \
  "$SUPABASE_URL/rest/v1/waitlist?limit=1")

HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n-1)

if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Connection successful!"
    echo "   HTTP Status: $HTTP_CODE"
    echo "   Response: $BODY"
elif [ "$HTTP_CODE" = "404" ]; then
    echo "⚠️  Connected, but 'waitlist' table not found (HTTP $HTTP_CODE)"
    echo "   Please run the SQL setup script in Supabase SQL Editor"
    echo "   File: setup_database.sql"
else
    echo "❌ Connection failed (HTTP $HTTP_CODE)"
    echo "   Response: $BODY"
fi

echo ""
echo "📚 Next steps:"
echo "   1. Go to: https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/sql/new"
echo "   2. Copy and run the SQL from: setup_database.sql"
echo "   3. Run this test again to verify"
echo "   4. Start dev server: npm run dev"
