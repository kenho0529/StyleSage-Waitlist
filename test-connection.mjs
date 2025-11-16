import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log('🔍 Testing Supabase Connection...\n');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  process.exit(1);
}

console.log('📋 Configuration:');
console.log(`   URL: ${supabaseUrl}`);
console.log(`   Key: ${supabaseKey.substring(0, 30)}...`);
console.log('');

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    // Test 1: Check if we can connect to Supabase
    console.log('🧪 Test 1: Testing API connection...');
    const { data: tables, error: listError } = await supabase
      .from('waitlist')
      .select('count', { count: 'exact', head: true });
    
    if (listError) {
      if (listError.code === 'PGRST116' || listError.message.includes('does not exist')) {
        console.log('⚠️  Connection successful, but "waitlist" table not found');
        console.log('   Error:', listError.message);
        console.log('');
        console.log('📚 Next Steps:');
        console.log('   1. Open Supabase SQL Editor:');
        console.log('      https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/sql/new');
        console.log('   2. Copy and paste the SQL from: setup_database.sql');
        console.log('   3. Click "Run" to create the table');
        console.log('   4. Run this test again: npm run test:supabase');
        return;
      }
      throw listError;
    }

    console.log('✅ Connection successful!');
    console.log(`   Found "waitlist" table`);
    console.log('');

    // Test 2: Try to insert a test email
    console.log('🧪 Test 2: Testing insert permission...');
    const testEmail = `test-${Date.now()}@stylesage.com`;
    
    const { data: insertData, error: insertError } = await supabase
      .from('waitlist')
      .insert([{ email: testEmail }])
      .select();

    console.log('   Insert response data:', insertData);
    console.log('   Insert response error:', insertError);

    if (insertError && Object.keys(insertError).length > 0) {
      console.log('❌ Insert test failed:');
      console.log('   Error:', JSON.stringify(insertError, null, 2));
      return;
    }

    console.log('✅ Insert permission working!');
    console.log(`   Test email added: ${testEmail}`);
    console.log('');

    // Test 3: Get total count
    console.log('🧪 Test 3: Counting total signups...');
    const { count, error: countError } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('❌ Count test failed:', countError.message);
      return;
    }

    console.log('✅ Database is ready!');
    console.log(`   Total signups: ${count}`);
    console.log('');

    // Clean up test data
    console.log('🧹 Cleaning up test data...');
    await supabase.from('waitlist').delete().eq('email', testEmail);
    console.log('✅ Test data removed');
    console.log('');

    console.log('🎉 All tests passed! Your waitlist is ready to use.');
    console.log('');
    console.log('📚 Next steps:');
    console.log('   1. Start dev server: npm run dev');
    console.log('   2. Open: http://localhost:5173');
    console.log('   3. Test the waitlist form');
    console.log('   4. View signups in Supabase: https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/editor/public.waitlist');

  } catch (error) {
    console.error('❌ Connection test failed:');
    console.error('   Error:', error.message);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error('   1. Verify your credentials in .env file');
    console.error('   2. Check if the table exists in Supabase');
    console.error('   3. Verify Row Level Security policies are set');
    process.exit(1);
  }
}

testConnection();
