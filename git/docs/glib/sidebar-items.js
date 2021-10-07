initSidebarItems({"attr":[["gflags","Attribute macro for defining flags using the `bitflags` crate. This macro will also define a `GFlags::type_` function and the `glib::Value` traits."],["object_interface","Macro for boilerplate of `ObjectInterface` implementations."],["object_subclass","Macro for boilerplate of `ObjectSubclass` implementations."]],"constant":[["CLONE_MACRO_LOG_DOMAIN","This is the log domain used by the [`clone!`][crate::clone!] macro. If you want to use a custom logger (it prints to stdout by default), you can set your own logger using the corresponding `log` functions."]],"derive":[["Downgrade","Macro for deriving implementations of `glib::clone::Downgrade` and `glib::clone::Upgrade` traits and a weak type."],["GBoxed","Derive macro for defining a `BoxedType``::type_` function and the `glib::Value` traits."],["GEnum",""],["GErrorDomain","Derive macro for defining a GLib error domain and its associated `ErrorDomain` trait."],["GSharedBoxed","Derive macro for defining a `SharedType``::get_type` function and the `glib::Value` traits."]],"enum":[["ChecksumType","The hashing algorithm to be used by [`Checksum`][crate::Checksum] when performing the digest of some data."],["DateMonth","Enumeration representing a month; values are [`January`][Self::January], [`February`][Self::February], etc. [`BadMonth`][Self::BadMonth] is the invalid value."],["DateWeekday","Enumeration representing a day of the week; [`Monday`][Self::Monday], [`Tuesday`][Self::Tuesday], etc. [`BadWeekday`][Self::BadWeekday] is an invalid weekday."],["FileError",""],["GlibLoggerDomain","Enumeration of the possible domain handling behaviours for a `GlibLogger`."],["GlibLoggerFormat","Enumeration of the possible formatting behaviours for a `GlibLogger`."],["KeyFileError","Error codes returned by key file parsing."],["LogLevel",""],["OptionArg","The [`OptionArg`][crate::OptionArg] enum values determine which type of extra argument the options expect to find. If an option expects an extra argument, it can be specified in several ways; with a short option: `-x arg`, with a long option: `--name arg` or combined in a single argument: `--name=arg`."],["SeekType","An enumeration specifying the base position for a `g_io_channel_seek_position()` operation."],["TimeType","Disambiguates a given time in two ways."],["UriError","Error codes returned by [`Uri`][crate::Uri] methods."],["UserDirectory","These are logical ids for special directories which are defined depending on the platform used. You should use [`user_special_dir()`][crate::user_special_dir()] to retrieve the full path associated to the logical id."]],"fn":[["access",""],["application_name",""],["assert_warning",""],["assertion_message",""],["assertion_message_cmpstr",""],["base64_decode",""],["base64_encode",""],["bit_nth_lsf",""],["bit_nth_msf",""],["bit_storage",""],["build_filenamev",""],["build_pathv",""],["canonicalize_filename",""],["charset","Obtain the character set for the current locale."],["chdir",""],["check_version",""],["child_watch_future","Create a `Future` that will resolve once the child process with the given pid exits"],["child_watch_future_with_priority","Create a `Future` that will resolve once the child process with the given pid exits"],["clear_error",""],["codeset",""],["compute_checksum_for_bytes",""],["compute_checksum_for_data",""],["compute_checksum_for_string",""],["compute_hmac_for_bytes",""],["compute_hmac_for_data",""],["compute_hmac_for_string",""],["console_charset",""],["current_dir",""],["dcgettext",""],["dgettext",""],["dngettext",""],["dpgettext","This function is a variant of [`dgettext()`][crate::dgettext()] which supports a disambiguating message context. GNU gettext uses the ‘\\004’ character to separate the message context and message id in `msgctxtid`. If 0 is passed as `msgidoffset`, this function will fall back to trying to use the deprecated convention of using “|” as a separation character."],["dpgettext2",""],["environ",""],["environ_getenv",""],["file_get_contents",""],["file_open_tmp",""],["file_read_link","Reads the contents of the symbolic link `filename` like the POSIX `readlink()` function. The returned string is in the encoding used for filenames. Use `g_filename_to_utf8()` to convert it to UTF-8."],["file_set_contents","Writes all of `contents` to a file named `filename`. This is a convenience wrapper around calling [`file_set_contents_full()`][crate::file_set_contents_full()] with `flags` set to `G_FILE_SET_CONTENTS_CONSISTENT | G_FILE_SET_CONTENTS_ONLY_EXISTING` and `mode` set to `0666`."],["file_set_contents_full","Writes all of `contents` to a file named `filename`, with good error checking. If a file called `filename` already exists it will be overwritten."],["file_test","Returns [`true`] if any of the tests in the bitfield `test` are [`true`]. For example, `(G_FILE_TEST_EXISTS | G_FILE_TEST_IS_DIR)` will return [`true`] if the file exists; the check whether it’s a directory doesn’t matter since the existence test is [`true`]. With the current set of available tests, there’s no point passing in more than one test at a time."],["filename_display_basename","Returns the display basename for the particular filename, guaranteed to be valid UTF-8. The display name might not be identical to the filename, for instance there might be problems converting it to UTF-8, and some files can be translated in the display."],["filename_display_name","Converts a filename into a valid UTF-8 string. The conversion is not necessarily reversible, so you should keep the original around and use the return value of this function only for display purposes. Unlike `g_filename_to_utf8()`, the result is guaranteed to be non-[`None`] even if the filename actually isn’t in the GLib file name encoding."],["filename_from_uri","Converts an escaped ASCII-encoded URI to a local filename in the encoding used for filenames."],["filename_to_uri",""],["find_program_in_path",""],["format_size",""],["format_size_full",""],["getenv",""],["home_dir",""],["host_name",""],["hostname_is_ascii_encoded",""],["hostname_is_ip_address",""],["hostname_is_non_ascii",""],["hostname_to_ascii",""],["hostname_to_unicode",""],["interval_stream","Create a `Stream` that will provide a value every given number of milliseconds."],["interval_stream_seconds","Create a `Stream` that will provide a value every given number of seconds."],["interval_stream_seconds_with_priority","Create a `Stream` that will provide a value every given number of seconds."],["interval_stream_with_priority","Create a `Stream` that will provide a value every given number of milliseconds."],["is_canonical_pspec_name",""],["language_names",""],["language_names_with_category",""],["listenv",""],["locale_variants",""],["log_default_handler",""],["log_remove_handler",""],["log_set_always_fatal",""],["log_set_default_handler","To set back the default print handler, use the [`log_unset_default_handler`] function."],["log_set_fatal_mask",""],["log_set_handler",""],["log_unset_default_handler","To set the default print handler, use the [`log_set_default_handler`] function."],["log_writer_default_set_use_stderr",""],["log_writer_default_would_drop",""],["main_current_source",""],["main_depth",""],["markup_escape_text",""],["mkdir_with_parents",""],["mkdtemp",""],["mkdtemp_full",""],["mkstemp",""],["mkstemp_full",""],["monotonic_time",""],["num_processors",""],["on_error_query",""],["on_error_stack_trace",""],["os_info",""],["path_get_basename",""],["path_get_dirname",""],["path_is_absolute",""],["path_skip_root",""],["pattern_match_simple",""],["prgname",""],["program_name","Same as `get_prgname()`."],["random_double",""],["random_double_range",""],["random_int",""],["random_int_range",""],["random_set_seed",""],["real_name",""],["real_time",""],["reload_user_special_dirs_cache",""],["return_if_fail_warning",""],["rmdir",""],["rust_log_handler","Provides a glib log handler which routes all logging messages to the `log crate`."],["set_application_name",""],["set_prgname",""],["set_print_handler","To set back the default print handler, use the [`unset_print_handler`] function."],["set_printerr_handler","To set back the default print handler, use the [`unset_printerr_handler`] function."],["set_program_name","Same as `set_prgname()`."],["setenv",""],["shell_parse_argv",""],["shell_quote",""],["shell_unquote",""],["spaced_primes_closest",""],["spawn_async",""],["spawn_async_with_fds",""],["spawn_async_with_pipes",""],["spawn_check_exit_status",""],["spawn_check_wait_status",""],["spawn_command_line_async",""],["stpcpy",""],["system_config_dirs",""],["system_data_dirs",""],["timeout_future","Create a `Future` that will resolve after the given number of milliseconds."],["timeout_future_seconds","Create a `Future` that will resolve after the given number of seconds."],["timeout_future_seconds_with_priority","Create a `Future` that will resolve after the given number of seconds."],["timeout_future_with_priority","Create a `Future` that will resolve after the given number of milliseconds."],["tmp_dir",""],["unix_open_pipe","Similar to the UNIX `pipe()` call, but on modern systems like Linux uses the `pipe2()` system call, which atomically creates a pipe with the configured flags. The only supported flag currently is `FD_CLOEXEC`. If for example you want to configure `O_NONBLOCK`, that must still be done separately with `fcntl()`."],["unix_signal_future","Create a `Future` that will resolve once the given UNIX signal is raised"],["unix_signal_future_with_priority","Create a `Future` that will resolve once the given UNIX signal is raised"],["unix_signal_stream","Create a `Stream` that will provide a value whenever the given UNIX signal is raised"],["unix_signal_stream_with_priority","Create a `Stream` that will provide a value whenever the given UNIX signal is raised"],["unlink","A wrapper for the POSIX `unlink()` function. The `unlink()` function deletes a name from the filesystem. If this was the last link to the file and no processes have it opened, the diskspace occupied by the file is freed."],["unset_print_handler","To set the default print handler, use the [`set_print_handler`] function."],["unset_printerr_handler","To set the default print handler, use the [`set_printerr_handler`] function."],["unsetenv","Removes an environment variable from the environment."],["uri_escape_string",""],["uri_parse_scheme",""],["uri_unescape_segment",""],["uri_unescape_string",""],["user_cache_dir",""],["user_config_dir",""],["user_data_dir",""],["user_name",""],["user_runtime_dir",""],["user_special_dir",""],["usleep","Pauses the current thread for the given number of microseconds."],["uuid_string_is_valid","Parses the string `str` and verify if it is a UUID."],["uuid_string_random","Generates a random UUID (RFC 4122 version 4) as a string. It has the same randomness guarantees as `GRand`, so must not be used for cryptographic purposes such as key generation, nonces, salts or one-time pads."],["warn_message","Internal function used to print messages from the public `g_warn_if_reached()` and `g_warn_if_fail()` macros."]],"macro":[["bool_error","Generic error used for functions that fail without any further information"],["clone","Macro for passing variables as strong or weak references into a closure."],["debug","A macro which behaves exactly as `log::debug!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["error","A macro which behaves exactly as `log::error!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["g_critical","Macro used to log using GLib logging system. It uses g_log."],["g_debug","Macro used to log using GLib logging system. It uses g_log."],["g_error","Macro used to log using GLib logging system. It uses g_log."],["g_info","Macro used to log using GLib logging system. It uses g_log."],["g_log","Macro used to log using GLib logging system. It uses g_log."],["g_message","Macro used to log using GLib logging system. It uses g_log."],["g_print","Macro used to print messages. It uses g_print."],["g_printerr","Macro used to print error messages. It uses g_printerr."],["g_warning","Macro used to log using GLib logging system. It uses g_log."],["glib_boxed_wrapper","Wrapper implementations for Boxed types. See `wrapper!`."],["glib_object_wrapper","ObjectType implementations for Object types. See `wrapper!`."],["glib_shared_wrapper","Wrapper implementations for shared types. See `wrapper!`."],["info","A macro which behaves exactly as `log::info!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["result_from_gboolean",""],["trace","A macro which behaves exactly as `log::trace!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["warn","A macro which behaves exactly as `log::warn!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["wrapper","Defines a wrapper type and implements the appropriate traits."]],"mod":[["boxed","`IMPL` Boxed wrapper implementation."],["char",""],["clone",""],["closure",""],["error","`Error` binding and helper trait."],["functions",""],["object","`IMPL` Object wrapper implementation and `Object` binding."],["prelude","Traits and essential types intended for blanket imports."],["send_unique",""],["shared","`IMPL` Shared (reference counted) wrapper implementation."],["signal","`IMPL` Low level signal support."],["source",""],["subclass","Module containing infrastructure for subclassing `GObject`s and registering boxed types."],["translate","Translation between GLib/GLib-based FFI types and their Rust counterparts."],["types","Runtime type information."],["value","`Value` binding and helper traits."],["variant","`Variant` binding and helper traits."],["wrapper","`IMPL` The `wrapper!` macro and miscellaneous wrapper traits."]],"static":[["CSET_A_2_Z","The set of uppercase ASCII alphabet characters. Used for specifying valid identifier characters in `GScannerConfig`."],["CSET_DIGITS","The set of ASCII digits. Used for specifying valid identifier characters in `GScannerConfig`."],["CSET_a_2_z","The set of lowercase ASCII alphabet characters. Used for specifying valid identifier characters in `GScannerConfig`."],["KEY_FILE_DESKTOP_GROUP","The name of the main group of a desktop entry file, as defined in the Desktop Entry Specification. Consult the specification for more details about the meanings of the keys below."],["KEY_FILE_DESKTOP_KEY_ACTIONS","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string list giving the available application actions."],["KEY_FILE_DESKTOP_KEY_CATEGORIES","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a list of strings giving the categories in which the desktop entry should be shown in a menu."],["KEY_FILE_DESKTOP_KEY_COMMENT","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a localized string giving the tooltip for the desktop entry."],["KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a boolean set to true if the application is D-Bus activatable."],["KEY_FILE_DESKTOP_KEY_EXEC","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string giving the command line to execute. It is only valid for desktop entries with the `Application` type."],["KEY_FILE_DESKTOP_KEY_GENERIC_NAME","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a localized string giving the generic name of the desktop entry."],["KEY_FILE_DESKTOP_KEY_HIDDEN","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a boolean stating whether the desktop entry has been deleted by the user."],["KEY_FILE_DESKTOP_KEY_ICON","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a localized string giving the name of the icon to be displayed for the desktop entry."],["KEY_FILE_DESKTOP_KEY_MIME_TYPE","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a list of strings giving the MIME types supported by this desktop entry."],["KEY_FILE_DESKTOP_KEY_NAME","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a localized string giving the specific name of the desktop entry."],["KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a list of strings identifying the environments that should not display the desktop entry."],["KEY_FILE_DESKTOP_KEY_NO_DISPLAY","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a boolean stating whether the desktop entry should be shown in menus."],["KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a list of strings identifying the environments that should display the desktop entry."],["KEY_FILE_DESKTOP_KEY_PATH","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string containing the working directory to run the program in. It is only valid for desktop entries with the `Application` type."],["KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a boolean stating whether the application supports the Startup Notification Protocol Specification."],["KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is string identifying the WM class or name hint of a window that the application will create, which can be used to emulate Startup Notification with older applications."],["KEY_FILE_DESKTOP_KEY_TERMINAL","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a boolean stating whether the program should be run in a terminal window."],["KEY_FILE_DESKTOP_KEY_TRY_EXEC","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string giving the file name of a binary on disk used to determine if the program is actually installed. It is only valid for desktop entries with the `Application` type."],["KEY_FILE_DESKTOP_KEY_TYPE","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string giving the type of the desktop entry."],["KEY_FILE_DESKTOP_KEY_URL","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string giving the URL to access. It is only valid for desktop entries with the `Link` type."],["KEY_FILE_DESKTOP_KEY_VERSION","A key under [`KEY_FILE_DESKTOP_GROUP`][crate::KEY_FILE_DESKTOP_GROUP], whose value is a string giving the version of the Desktop Entry Specification used for the desktop entry file."],["KEY_FILE_DESKTOP_TYPE_APPLICATION","The value of the [`KEY_FILE_DESKTOP_KEY_TYPE`][crate::KEY_FILE_DESKTOP_KEY_TYPE], key for desktop entries representing applications."],["KEY_FILE_DESKTOP_TYPE_DIRECTORY","The value of the [`KEY_FILE_DESKTOP_KEY_TYPE`][crate::KEY_FILE_DESKTOP_KEY_TYPE], key for desktop entries representing directories."],["KEY_FILE_DESKTOP_TYPE_LINK","The value of the [`KEY_FILE_DESKTOP_KEY_TYPE`][crate::KEY_FILE_DESKTOP_KEY_TYPE], key for desktop entries representing links to documents."],["OPTION_REMAINING","If a long option in the main group has this name, it is not treated as a regular option. Instead it collects all non-option arguments which would otherwise be left in `argv`. The option must be of type [`OptionArg::Callback`][crate::OptionArg::Callback], [`OptionArg::StringArray`][crate::OptionArg::StringArray] or [`OptionArg::FilenameArray`][crate::OptionArg::FilenameArray]."],["STR_DELIMITERS","The standard delimiters, used in `g_strdelimit()`."],["TEST_OPTION_ISOLATE_DIRS","Creates a unique temporary directory for each unit test and uses `g_set_user_dirs()` to set XDG directories to point into subdirectories of it for the duration of the unit test. The directory tree is cleaned up after the test finishes successfully. Note that this doesn’t take effect until `g_test_run()` is called, so calls to (for example) `g_get_user_home_dir()` will return the system-wide value when made in a test program’s `main()` function."],["URI_RESERVED_CHARS_GENERIC_DELIMITERS","Generic delimiters characters as defined in RFC 3986. Includes `:/?#[]@`."],["URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS","Subcomponent delimiter characters as defined in RFC 3986. Includes `!$&'()*+,;=`."],["g_param_spec_types",""]],"struct":[["Array",""],["Binding","[`Binding`][crate::Binding] is the representation of a binding between a property on a [`Object`][crate::Object] instance (or source) and another property on another [`Object`][crate::Object] instance (or target)."],["BindingFlags","Flags to be passed to [`ObjectExtManual::bind_property()`][crate::prelude::ObjectExtManual::bind_property()] or [`ObjectExtManual::bind_property_full()`][crate::prelude::ObjectExtManual::bind_property_full()]."],["ByteArray","Contains the public fields of a GByteArray."],["Bytes","A shared immutable byte slice (the equivalent of `Rc<[u8]>`)."],["Checksum","An opaque structure representing a checksumming operation."],["CollationKey","A `CollationKey` allows ordering strings using the linguistically correct rules for the current locale."],["Date",""],["DateTime","An opaque structure that represents a date and time, including a time zone."],["EnumClass","Representation of an `enum` for dynamically, at runtime, querying the values of the enum and using them."],["EnumValue","Representation of a single enum value of an `EnumClass`."],["FileSetContentsFlags","Flags to pass to [`file_set_contents_full()`][crate::file_set_contents_full()] to affect its safety and performance."],["FileTest","A test to perform on a file using [`file_test()`][crate::file_test()]."],["FilenameCollationKey","A `FilenameCollationKey` allows ordering file names using the linguistically correct rules for the current locale. Compared to `CollationKey`, filename collation keys take into consideration dots and other characters commonly found in file names."],["FlagsBuilder","Builder for conveniently setting/unsetting flags and returning a `Value`."],["FlagsClass","Representation of a `flags` for dynamically, at runtime, querying the values of the enum and using them"],["FlagsValue","Representation of a single flags value of a `FlagsClass`."],["FormatSizeFlags","Flags to modify the format of the string returned by [`format_size_full()`][crate::format_size_full()]."],["GString",""],["GlibLogger","An implementation of a `log` compatible logger which logs over glib logging facilities."],["IOCondition","A bitwise combination representing a condition to watch for on an event source."],["KeyFile","The GKeyFile struct contains only private data and should not be accessed directly."],["KeyFileFlags","Flags which influence the parsing."],["LogHandlerId",""],["LogLevelFlags","Flags specifying the level of log messages."],["LogLevels",""],["MainContext","The `GMainContext` struct is an opaque data type representing a set of sources to be handled in a main loop."],["MainContextAcquireGuard",""],["MainLoop","The `GMainLoop` struct is an opaque data type representing the main event loop of a GLib or GTK+ application."],["OptionFlags","Flags which modify individual options."],["ParamFlags","Through the [`ParamFlags`][crate::ParamFlags] flag values, certain aspects of parameters can be configured."],["ParamSpec",""],["ParamSpecBoolean",""],["ParamSpecBoxed",""],["ParamSpecChar",""],["ParamSpecDouble",""],["ParamSpecEnum",""],["ParamSpecFlags",""],["ParamSpecFloat",""],["ParamSpecGType",""],["ParamSpecInt",""],["ParamSpecInt64",""],["ParamSpecLong",""],["ParamSpecObject",""],["ParamSpecOverride",""],["ParamSpecParam",""],["ParamSpecPointer",""],["ParamSpecString",""],["ParamSpecUChar",""],["ParamSpecUInt",""],["ParamSpecUInt64",""],["ParamSpecULong",""],["ParamSpecUnichar",""],["ParamSpecValueArray",""],["ParamSpecVariant",""],["Quark",""],["Receiver","A `Receiver` that can be attached to a main context to receive items from its corresponding `Sender` or `SyncSender`."],["Sender","A `Sender` that can be used to send items to the corresponding main context receiver."],["SignalFlags","The signal flags are used to specify a signal’s behaviour."],["Source","The `GSource` struct is an opaque data type representing an event source."],["SourceFuture","Represents a `Future` around a `glib::Source`. The future will be resolved once the source has provided a value"],["SourceStream","Represents a `Stream` around a `glib::Source`. The stream will be provide all values that are provided by the source"],["SpawnFlags","Flags passed to `g_spawn_sync()`, [`spawn_async()`][crate::spawn_async()] and `g_spawn_async_with_pipes()`."],["String","A mutable text buffer that grows automatically."],["SyncSender","A `SyncSender` that can be used to send items to the corresponding main context receiver."],["ThreadPool",""],["TimeZone","[`TimeZone`][crate::TimeZone] is an opaque structure whose members cannot be accessed directly."],["Uri","The [`Uri`][crate::Uri] type and related functions can be used to parse URIs into their components, and build valid URIs from individual components."],["UriFlags","Flags that describe a URI."],["UriHideFlags","Flags describing what parts of the URI to hide in [`Uri::to_string_partial()`][crate::Uri::to_string_partial()]. Note that [`PASSWORD`][Self::PASSWORD] and [`AUTH_PARAMS`][Self::AUTH_PARAMS] will only work if the [`Uri`][crate::Uri] was parsed with the corresponding flags."],["UriParamsFlags","Flags modifying the way parameters are handled by `g_uri_parse_params()` and `GUriParamsIter`."],["ValueArray",""],["VariantDict","`VariantDict` is a mutable key/value store where the keys are always strings and the values are `Variant`s."],["VariantIter","Iterator over items in a variant."],["VariantStrIter","Iterator over items in a variant of type `as`."],["VariantTy","Describes `Variant` types."],["VariantType","Describes `Variant` types."]],"trait":[["ParamSpecType",""]],"type":[["DateDay",""],["DateYear",""],["Time",""],["TimeSpan",""]]});