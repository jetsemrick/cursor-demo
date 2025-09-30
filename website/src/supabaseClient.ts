import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nuttfispffqhawvlweoa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dHRmaXNwZmZxaGF3dmx3ZW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMDU3NzAsImV4cCI6MjA3NDc4MTc3MH0.EqWscHoxRLzkbi508xEueY2D_3D6-f5Ubets6PUluTQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

