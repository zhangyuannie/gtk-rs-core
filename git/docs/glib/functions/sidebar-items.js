initSidebarItems({"fn":[["access","A wrapper for the POSIX `access()` function. This function is used to test a pathname for one or several of read, write or execute permissions, or just existence."],["application_name","Gets a human-readable name for the application, as set by [`set_application_name()`][crate::set_application_name()]. This name should be localized if possible, and is intended for display to the user. Contrast with `g_get_prgname()`, which gets a non-localized name. If [`set_application_name()`][crate::set_application_name()] has not been called, returns the result of `g_get_prgname()` (which may be [`None`] if `g_set_prgname()` has also not been called)."],["base64_decode","Decode a sequence of Base-64 encoded text into binary data. Note that the returned binary data is not necessarily zero-terminated, so it should not be used as a character string."],["base64_encode","Encode a sequence of binary data into its Base-64 stringified representation."],["check_version","Checks that the GLib library in use is compatible with the given version."],["codeset","Gets the character set for the current locale."],["compute_checksum_for_bytes","Computes the checksum for a binary `data`. This is a convenience wrapper for [`Checksum::new()`][crate::Checksum::new()], [`Checksum::string()`][crate::Checksum::string()] and `g_checksum_free()`."],["compute_checksum_for_data","Computes the checksum for a binary `data` of `length`. This is a convenience wrapper for [`Checksum::new()`][crate::Checksum::new()], [`Checksum::string()`][crate::Checksum::string()] and `g_checksum_free()`."],["compute_hmac_for_bytes","Computes the HMAC for a binary `data`. This is a convenience wrapper for `g_hmac_new()`, `g_hmac_get_string()` and `g_hmac_unref()`."],["compute_hmac_for_data","Computes the HMAC for a binary `data` of `length`. This is a convenience wrapper for `g_hmac_new()`, `g_hmac_get_string()` and `g_hmac_unref()`."],["console_charset","Obtains the character set used by the console attached to the process, which is suitable for printing output to the terminal."],["dcgettext","This is a variant of [`dgettext()`][crate::dgettext()] that allows specifying a locale category instead of always using `LC_MESSAGES`. See [`dgettext()`][crate::dgettext()] for more information about how this functions differs from calling `dcgettext()` directly."],["dgettext","This function is a wrapper of `dgettext()` which does not translate the message if the default domain as set with `textdomain()` has no translations for the current locale."],["dngettext","This function is a wrapper of `dngettext()` which does not translate the message if the default domain as set with `textdomain()` has no translations for the current locale."],["dpgettext","This function is a variant of [`dgettext()`][crate::dgettext()] which supports a disambiguating message context. GNU gettext uses the ‘\\004’ character to separate the message context and message id in `msgctxtid`. If 0 is passed as `msgidoffset`, this function will fall back to trying to use the deprecated convention of using “|” as a separation character."],["dpgettext2","This function is a variant of [`dgettext()`][crate::dgettext()] which supports a disambiguating message context. GNU gettext uses the ‘\\004’ character to separate the message context and message id in `msgctxtid`."],["environ","Gets the list of environment variables for the current process."],["file_set_contents","Writes all of `contents` to a file named `filename`. This is a convenience wrapper around calling [`file_set_contents_full()`][crate::file_set_contents_full()] with `flags` set to `G_FILE_SET_CONTENTS_CONSISTENT | G_FILE_SET_CONTENTS_ONLY_EXISTING` and `mode` set to `0666`."],["file_set_contents_full","Writes all of `contents` to a file named `filename`, with good error checking. If a file called `filename` already exists it will be overwritten."],["filename_display_basename","Returns the display basename for the particular filename, guaranteed to be valid UTF-8. The display name might not be identical to the filename, for instance there might be problems converting it to UTF-8, and some files can be translated in the display."],["filename_display_name","Converts a filename into a valid UTF-8 string. The conversion is not necessarily reversible, so you should keep the original around and use the return value of this function only for display purposes. Unlike `g_filename_to_utf8()`, the result is guaranteed to be non-[`None`] even if the filename actually isn’t in the GLib file name encoding."],["format_size","Formats a size (for example the size of a file) into a human readable string. Sizes are rounded to the nearest size prefix (kB, MB, GB) and are displayed rounded to the nearest tenth. E.g. the file size 3292528 bytes will be converted into the string “3.2 MB”. The returned string is UTF-8, and may use a non-breaking space to separate the number and units, to ensure they aren’t separated when line wrapped."],["format_size_full","Formats a size."],["host_name","Return a name for the machine."],["hostname_is_ascii_encoded","Tests if `hostname` contains segments with an ASCII-compatible encoding of an Internationalized Domain Name. If this returns [`true`], you should decode the hostname with [`hostname_to_unicode()`][crate::hostname_to_unicode()] before displaying it to the user."],["hostname_is_ip_address","Tests if `hostname` is the string form of an IPv4 or IPv6 address. (Eg, “192.168.0.1”.)"],["hostname_is_non_ascii","Tests if `hostname` contains Unicode characters. If this returns [`true`], you need to encode the hostname with [`hostname_to_ascii()`][crate::hostname_to_ascii()] before using it in non-IDN-aware contexts."],["hostname_to_ascii","Converts `hostname` to its canonical ASCII form; an ASCII-only string containing no uppercase letters and not ending with a trailing dot."],["hostname_to_unicode","Converts `hostname` to its canonical presentation form; a UTF-8 string in Unicode normalization form C, containing no uppercase letters, no forbidden characters, and no ASCII-encoded segments, and not ending with a trailing dot."],["language_names","Computes a list of applicable locale names, which can be used to e.g. construct locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable and always contains the default locale “C”."],["language_names_with_category","Computes a list of applicable locale names with a locale category name, which can be used to construct the fallback locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable and always contains the default locale “C”."],["listenv","See [canonical parameter names][canonical-parameter-names] for details of the rules for valid names."],["locale_variants","Returns a list of derived variants of `locale`, which can be used to e.g. construct locale-dependent filenames or search paths. The returned list is sorted from most desirable to least desirable. This function handles territory, charset and extra locale modifiers. See `setlocale(3)` for information about locales and their format."],["main_current_source",""],["main_depth",""],["markup_escape_text",""],["mkdir_with_parents",""],["monotonic_time","Queries the system monotonic time."],["num_processors","Determine the approximate number of threads that the system will schedule simultaneously for this process. This is intended to be used as a parameter to [`ThreadPool::new()`][crate::ThreadPool::new()] for CPU bound tasks and similar cases."],["on_error_query",""],["on_error_stack_trace",""],["os_info","Get information about the operating system."],["random_double",""],["random_double_range",""],["random_int",""],["random_int_range",""],["random_set_seed",""],["real_time","Queries the system wall-clock time."],["reload_user_special_dirs_cache",""],["set_application_name",""],["shell_parse_argv",""],["shell_quote",""],["shell_unquote",""],["spaced_primes_closest",""],["spawn_async",""],["spawn_check_exit_status",""],["spawn_check_wait_status",""],["spawn_command_line_async",""],["system_config_dirs","Returns an ordered list of base directories in which to access system-wide configuration information."],["system_data_dirs","Returns an ordered list of base directories in which to access system-wide application data."],["unicode_script_from_iso15924",""],["unicode_script_to_iso15924",""],["unlink",""],["user_cache_dir","Returns a base directory in which to store non-essential, cached data specific to particular user."],["user_config_dir","Returns a base directory in which to store user-specific application configuration information such as user preferences and settings."],["user_data_dir","Returns a base directory in which to access application data such as icons that is customized for a particular user."],["user_runtime_dir","Returns a directory that is unique to the current user on the local system."],["user_special_dir","Returns the full path of a special directory using its logical id."],["user_state_dir","Returns a base directory in which to store state files specific to particular user."],["usleep",""],["uuid_string_is_valid",""],["uuid_string_random",""]]});