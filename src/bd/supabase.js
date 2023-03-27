import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hvvkrdvxncfcnelhyfod.supabase.co'

// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dmtyZHZ4bmNmY25lbGh5Zm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzY2MTksImV4cCI6MTk5Mjc1MjYxOX0.WHM-_bVZmJuDsz3wfVZ-6hoA8VhTK4C6EYsfxlzycsQ'
export const supabase = createClient(supabaseUrl, supabaseKey)
