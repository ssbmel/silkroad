import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://ovrehkvranncpqvbhpvx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cmVoa3ZyYW5uY3BxdmJocHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MjA2MjcsImV4cCI6MjAzNDI5NjYyN30.zYoz9IgjffAsmfXxkVsnU6L_8AEEc1fStq6KsXO4Txo')

export default supabase;