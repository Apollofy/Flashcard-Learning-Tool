// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ayrfpjsadseimgfjwdba.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5cmZwanNhZHNlaW1nZmp3ZGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNzU2NTUsImV4cCI6MjAzODk1MTY1NX0.UveGlWqvSX49FarmnOjvzo2sGXD_uIYd08SJWTKKkII';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
