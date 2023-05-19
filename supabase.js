import { createClient } from '@supabase/supabase-js'
import { env } from 'process';

const supabaseUrl = 'https://vbaptqkeeztnqztpdaos.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiYXB0cWtlZXp0bnF6dHBkYW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1Njc3MzksImV4cCI6MTk5OTE0MzczOX0.k8W8Br1DluExsAzOHdzErhm1bSwVlUjQjDw0nw695h4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default (_, inject) => {
	inject('supabase', supabase)
}
