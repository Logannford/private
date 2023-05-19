import { createClient } from '@supabase/supabase-js'
import { env } from "./"

const supabaseUrl = 'https://vbaptqkeeztnqztpdaos.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)