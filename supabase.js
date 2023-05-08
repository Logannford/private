import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbaptqkeeztnqztpdaos.supabase.co'
const supabaseKey = process.env.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)