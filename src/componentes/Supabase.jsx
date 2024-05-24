import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://umybgeybpsbwhrejqpze.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVteWJnZXlicHNid2hyZWpxcHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NDY5MjcsImV4cCI6MjAzMTEyMjkyN30.y6M9M0vG4buH7vvkAJXzvCYS7mTPzuEiXkphCNryqgg'

export const supabase = createClient(supabaseUrl, supabaseKey)