debug_print("Window Name: " .. get_window_name());
debug_print("Application name: " .. get_application_name())

if (get_application_name()=="Notes") then
    debug_print("Undecorating Notes..")
    undecorate_window();
end
