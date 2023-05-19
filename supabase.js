import { createClient } from '@supabase/supabase-js'
import { env } from "./"

const supabaseUrl = 'https://vbaptqkeeztnqztpdaos.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiYXB0cWtlZXp0bnF6dHBkYW9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzU2NzczOSwiZXhwIjoxOTk5MTQzNzM5fQ.w9yRZzpIfqQxDGRq9vWdZyq5qXgiEEB3tXzBdUzw-Qk"
const supabase = createClient(supabaseUrl, supabaseKey)