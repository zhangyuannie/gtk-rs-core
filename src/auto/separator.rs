// This file was generated by gir (b010d34) from gir-files (71d73f0)
// DO NOT EDIT

use Orientable;
use Orientation;
use Widget;
use ffi;
use glib::object::Downcast;
use glib::translate::*;

glib_wrapper! {
    pub struct Separator(Object<ffi::GtkSeparator>): Widget, Orientable;

    match fn {
        get_type => || ffi::gtk_separator_get_type(),
    }
}

impl Separator {
    pub fn new(orientation: Orientation) -> Separator {
        assert_initialized_main_thread!();
        unsafe {
            Widget::from_glib_none(ffi::gtk_separator_new(orientation.to_glib())).downcast_unchecked()
        }
    }
}
