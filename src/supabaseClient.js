import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jvpdtoauzvaqlxspmrqo.supabase.co";
const supabaseKey = "sb_publishable_oFdRebEjCDnm5YK4OY075w_OmqoXjFx";

export const supabase = createClient(supabaseUrl, supabaseKey);