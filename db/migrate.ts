import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration() {
  try {
    // Read the migration file
    const sqlPath = path.join(__dirname, 'migrations', '0000_create_products_table.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Run the migration
    const { error } = await supabase.from('products').select('id').limit(1);
    
    if (error && error.message.includes('does not exist')) {
      const { error: migrationError } = await supabase.rpc('exec', { sql });
      
      if (migrationError) {
        throw migrationError;
      }
      
      console.log('Migration completed successfully');
    } else {
      console.log('Table already exists, skipping migration');
    }
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
