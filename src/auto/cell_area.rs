// This file was generated by gir (b010d34) from gir-files (71d73f0)
// DO NOT EDIT

use CellAreaContext;
use CellEditable;
use CellLayout;
use CellRenderer;
use CellRendererState;
use DirectionType;
use Orientation;
use SizeRequestMode;
use TreeIter;
use TreeModel;
use TreePath;
use Widget;
use cairo;
use ffi;
use gdk;
use gdk_ffi;
use glib;
use glib::object::Downcast;
use glib::object::IsA;
use glib::signal::connect;
use glib::translate::*;
use glib_ffi;
use libc;
use std::boxed::Box as Box_;
use std::mem;
use std::mem::transmute;

glib_wrapper! {
    pub struct CellArea(Object<ffi::GtkCellArea>): CellLayout;

    match fn {
        get_type => || ffi::gtk_cell_area_get_type(),
    }
}

pub trait CellAreaExt {
    fn activate<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, flags: CellRendererState, edit_only: bool) -> bool;

    fn activate_cell<P: IsA<Widget>, Q: IsA<CellRenderer>>(&self, widget: &P, renderer: &Q, event: &gdk::Event, cell_area: &gdk::Rectangle, flags: CellRendererState) -> bool;

    fn add<P: IsA<CellRenderer>>(&self, renderer: &P);

    fn add_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q);

    //fn add_with_properties<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs);

    fn apply_attributes<P: IsA<TreeModel>>(&self, tree_model: &P, iter: &TreeIter, is_expander: bool, is_expanded: bool);

    fn attribute_connect<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str, column: i32);

    fn attribute_disconnect<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str);

    #[cfg(feature = "v3_14")]
    fn attribute_get_column<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str) -> i32;

    //fn cell_get<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs);

    //fn cell_get_valist<P: IsA<CellRenderer>>(&self, renderer: &P, first_property_name: &str, var_args: /*Unknown conversion*//*Unimplemented*/Unsupported);

    //fn cell_set<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs);

    //fn cell_set_valist<P: IsA<CellRenderer>>(&self, renderer: &P, first_property_name: &str, var_args: /*Unknown conversion*//*Unimplemented*/Unsupported);

    fn copy_context(&self, context: &CellAreaContext) -> Option<CellAreaContext>;

    fn create_context(&self) -> Option<CellAreaContext>;

    fn event<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, event: &gdk::Event, cell_area: &gdk::Rectangle, flags: CellRendererState) -> i32;

    fn focus(&self, direction: DirectionType) -> bool;

    //fn foreach<P: Into<Option</*Unimplemented*/Fundamental: Pointer>>>(&self, callback: /*Unknown conversion*//*Unimplemented*/CellCallback, callback_data: P);

    //fn foreach_alloc<P: IsA<Widget>, Q: Into<Option</*Unimplemented*/Fundamental: Pointer>>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, background_area: &gdk::Rectangle, callback: /*Unknown conversion*//*Unimplemented*/CellAllocCallback, callback_data: Q);

    fn get_cell_allocation<P: IsA<Widget>, Q: IsA<CellRenderer>>(&self, context: &CellAreaContext, widget: &P, renderer: &Q, cell_area: &gdk::Rectangle) -> gdk::Rectangle;

    fn get_cell_at_position<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, x: i32, y: i32) -> (CellRenderer, gdk::Rectangle);

    fn get_current_path_string(&self) -> Option<String>;

    fn get_edit_widget(&self) -> Option<CellEditable>;

    fn get_edited_cell(&self) -> Option<CellRenderer>;

    fn get_focus_cell(&self) -> Option<CellRenderer>;

    fn get_focus_from_sibling<P: IsA<CellRenderer>>(&self, renderer: &P) -> Option<CellRenderer>;

    fn get_focus_siblings<P: IsA<CellRenderer>>(&self, renderer: &P) -> Vec<CellRenderer>;

    fn get_preferred_height<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P) -> (i32, i32);

    fn get_preferred_height_for_width<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, width: i32) -> (i32, i32);

    fn get_preferred_width<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P) -> (i32, i32);

    fn get_preferred_width_for_height<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, height: i32) -> (i32, i32);

    fn get_request_mode(&self) -> SizeRequestMode;

    fn has_renderer<P: IsA<CellRenderer>>(&self, renderer: &P) -> bool;

    fn inner_cell_area<P: IsA<Widget>>(&self, widget: &P, cell_area: &gdk::Rectangle) -> gdk::Rectangle;

    fn is_activatable(&self) -> bool;

    fn is_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q) -> bool;

    fn remove<P: IsA<CellRenderer>>(&self, renderer: &P);

    fn remove_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q);

    fn render<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cr: &cairo::Context, background_area: &gdk::Rectangle, cell_area: &gdk::Rectangle, flags: CellRendererState, paint_focus: bool);

    fn request_renderer<P: IsA<CellRenderer>, Q: IsA<Widget>>(&self, renderer: &P, orientation: Orientation, widget: &Q, for_size: i32) -> (i32, i32);

    fn set_focus_cell<P: IsA<CellRenderer>>(&self, renderer: &P);

    fn stop_editing(&self, canceled: bool);

    fn connect_add_editable<F: Fn(&Self, &CellRenderer, &CellEditable, &gdk::Rectangle, TreePath) + 'static>(&self, f: F) -> u64;

    fn connect_apply_attributes<F: Fn(&Self, &TreeModel, &TreeIter, bool, bool) + 'static>(&self, f: F) -> u64;

    fn connect_focus_changed<F: Fn(&Self, &CellRenderer, TreePath) + 'static>(&self, f: F) -> u64;

    fn connect_remove_editable<F: Fn(&Self, &CellRenderer, &CellEditable) + 'static>(&self, f: F) -> u64;
}

impl<O: IsA<CellArea> + IsA<glib::object::Object>> CellAreaExt for O {
    fn activate<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, flags: CellRendererState, edit_only: bool) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_activate(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, cell_area.to_glib_none().0, flags.to_glib(), edit_only.to_glib()))
        }
    }

    fn activate_cell<P: IsA<Widget>, Q: IsA<CellRenderer>>(&self, widget: &P, renderer: &Q, event: &gdk::Event, cell_area: &gdk::Rectangle, flags: CellRendererState) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_activate_cell(self.to_glib_none().0, widget.to_glib_none().0, renderer.to_glib_none().0, mut_override(event.to_glib_none().0), cell_area.to_glib_none().0, flags.to_glib()))
        }
    }

    fn add<P: IsA<CellRenderer>>(&self, renderer: &P) {
        unsafe {
            ffi::gtk_cell_area_add(self.to_glib_none().0, renderer.to_glib_none().0);
        }
    }

    fn add_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q) {
        unsafe {
            ffi::gtk_cell_area_add_focus_sibling(self.to_glib_none().0, renderer.to_glib_none().0, sibling.to_glib_none().0);
        }
    }

    //fn add_with_properties<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_cell_area_add_with_properties() }
    //}

    fn apply_attributes<P: IsA<TreeModel>>(&self, tree_model: &P, iter: &TreeIter, is_expander: bool, is_expanded: bool) {
        unsafe {
            ffi::gtk_cell_area_apply_attributes(self.to_glib_none().0, tree_model.to_glib_none().0, mut_override(iter.to_glib_none().0), is_expander.to_glib(), is_expanded.to_glib());
        }
    }

    fn attribute_connect<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str, column: i32) {
        unsafe {
            ffi::gtk_cell_area_attribute_connect(self.to_glib_none().0, renderer.to_glib_none().0, attribute.to_glib_none().0, column);
        }
    }

    fn attribute_disconnect<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str) {
        unsafe {
            ffi::gtk_cell_area_attribute_disconnect(self.to_glib_none().0, renderer.to_glib_none().0, attribute.to_glib_none().0);
        }
    }

    #[cfg(feature = "v3_14")]
    fn attribute_get_column<P: IsA<CellRenderer>>(&self, renderer: &P, attribute: &str) -> i32 {
        unsafe {
            ffi::gtk_cell_area_attribute_get_column(self.to_glib_none().0, renderer.to_glib_none().0, attribute.to_glib_none().0)
        }
    }

    //fn cell_get<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_cell_area_cell_get() }
    //}

    //fn cell_get_valist<P: IsA<CellRenderer>>(&self, renderer: &P, first_property_name: &str, var_args: /*Unknown conversion*//*Unimplemented*/Unsupported) {
    //    unsafe { TODO: call ffi::gtk_cell_area_cell_get_valist() }
    //}

    //fn cell_set<P: IsA<CellRenderer>>(&self, renderer: &P, first_prop_name: &str, : /*Unknown conversion*//*Unimplemented*/Fundamental: VarArgs) {
    //    unsafe { TODO: call ffi::gtk_cell_area_cell_set() }
    //}

    //fn cell_set_valist<P: IsA<CellRenderer>>(&self, renderer: &P, first_property_name: &str, var_args: /*Unknown conversion*//*Unimplemented*/Unsupported) {
    //    unsafe { TODO: call ffi::gtk_cell_area_cell_set_valist() }
    //}

    fn copy_context(&self, context: &CellAreaContext) -> Option<CellAreaContext> {
        unsafe {
            from_glib_full(ffi::gtk_cell_area_copy_context(self.to_glib_none().0, context.to_glib_none().0))
        }
    }

    fn create_context(&self) -> Option<CellAreaContext> {
        unsafe {
            from_glib_full(ffi::gtk_cell_area_create_context(self.to_glib_none().0))
        }
    }

    fn event<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, event: &gdk::Event, cell_area: &gdk::Rectangle, flags: CellRendererState) -> i32 {
        unsafe {
            ffi::gtk_cell_area_event(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, mut_override(event.to_glib_none().0), cell_area.to_glib_none().0, flags.to_glib())
        }
    }

    fn focus(&self, direction: DirectionType) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_focus(self.to_glib_none().0, direction.to_glib()))
        }
    }

    //fn foreach<P: Into<Option</*Unimplemented*/Fundamental: Pointer>>>(&self, callback: /*Unknown conversion*//*Unimplemented*/CellCallback, callback_data: P) {
    //    unsafe { TODO: call ffi::gtk_cell_area_foreach() }
    //}

    //fn foreach_alloc<P: IsA<Widget>, Q: Into<Option</*Unimplemented*/Fundamental: Pointer>>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, background_area: &gdk::Rectangle, callback: /*Unknown conversion*//*Unimplemented*/CellAllocCallback, callback_data: Q) {
    //    unsafe { TODO: call ffi::gtk_cell_area_foreach_alloc() }
    //}

    fn get_cell_allocation<P: IsA<Widget>, Q: IsA<CellRenderer>>(&self, context: &CellAreaContext, widget: &P, renderer: &Q, cell_area: &gdk::Rectangle) -> gdk::Rectangle {
        unsafe {
            let mut allocation = gdk::Rectangle::uninitialized();
            ffi::gtk_cell_area_get_cell_allocation(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, renderer.to_glib_none().0, cell_area.to_glib_none().0, allocation.to_glib_none_mut().0);
            allocation
        }
    }

    fn get_cell_at_position<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cell_area: &gdk::Rectangle, x: i32, y: i32) -> (CellRenderer, gdk::Rectangle) {
        unsafe {
            let mut alloc_area = gdk::Rectangle::uninitialized();
            let ret = from_glib_none(ffi::gtk_cell_area_get_cell_at_position(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, cell_area.to_glib_none().0, x, y, alloc_area.to_glib_none_mut().0));
            (ret, alloc_area)
        }
    }

    fn get_current_path_string(&self) -> Option<String> {
        unsafe {
            from_glib_none(ffi::gtk_cell_area_get_current_path_string(self.to_glib_none().0))
        }
    }

    fn get_edit_widget(&self) -> Option<CellEditable> {
        unsafe {
            from_glib_none(ffi::gtk_cell_area_get_edit_widget(self.to_glib_none().0))
        }
    }

    fn get_edited_cell(&self) -> Option<CellRenderer> {
        unsafe {
            from_glib_none(ffi::gtk_cell_area_get_edited_cell(self.to_glib_none().0))
        }
    }

    fn get_focus_cell(&self) -> Option<CellRenderer> {
        unsafe {
            from_glib_none(ffi::gtk_cell_area_get_focus_cell(self.to_glib_none().0))
        }
    }

    fn get_focus_from_sibling<P: IsA<CellRenderer>>(&self, renderer: &P) -> Option<CellRenderer> {
        unsafe {
            from_glib_none(ffi::gtk_cell_area_get_focus_from_sibling(self.to_glib_none().0, renderer.to_glib_none().0))
        }
    }

    fn get_focus_siblings<P: IsA<CellRenderer>>(&self, renderer: &P) -> Vec<CellRenderer> {
        unsafe {
            FromGlibPtrContainer::from_glib_none(ffi::gtk_cell_area_get_focus_siblings(self.to_glib_none().0, renderer.to_glib_none().0))
        }
    }

    fn get_preferred_height<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P) -> (i32, i32) {
        unsafe {
            let mut minimum_height = mem::uninitialized();
            let mut natural_height = mem::uninitialized();
            ffi::gtk_cell_area_get_preferred_height(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, &mut minimum_height, &mut natural_height);
            (minimum_height, natural_height)
        }
    }

    fn get_preferred_height_for_width<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, width: i32) -> (i32, i32) {
        unsafe {
            let mut minimum_height = mem::uninitialized();
            let mut natural_height = mem::uninitialized();
            ffi::gtk_cell_area_get_preferred_height_for_width(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, width, &mut minimum_height, &mut natural_height);
            (minimum_height, natural_height)
        }
    }

    fn get_preferred_width<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P) -> (i32, i32) {
        unsafe {
            let mut minimum_width = mem::uninitialized();
            let mut natural_width = mem::uninitialized();
            ffi::gtk_cell_area_get_preferred_width(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, &mut minimum_width, &mut natural_width);
            (minimum_width, natural_width)
        }
    }

    fn get_preferred_width_for_height<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, height: i32) -> (i32, i32) {
        unsafe {
            let mut minimum_width = mem::uninitialized();
            let mut natural_width = mem::uninitialized();
            ffi::gtk_cell_area_get_preferred_width_for_height(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, height, &mut minimum_width, &mut natural_width);
            (minimum_width, natural_width)
        }
    }

    fn get_request_mode(&self) -> SizeRequestMode {
        unsafe {
            from_glib(ffi::gtk_cell_area_get_request_mode(self.to_glib_none().0))
        }
    }

    fn has_renderer<P: IsA<CellRenderer>>(&self, renderer: &P) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_has_renderer(self.to_glib_none().0, renderer.to_glib_none().0))
        }
    }

    fn inner_cell_area<P: IsA<Widget>>(&self, widget: &P, cell_area: &gdk::Rectangle) -> gdk::Rectangle {
        unsafe {
            let mut inner_area = gdk::Rectangle::uninitialized();
            ffi::gtk_cell_area_inner_cell_area(self.to_glib_none().0, widget.to_glib_none().0, cell_area.to_glib_none().0, inner_area.to_glib_none_mut().0);
            inner_area
        }
    }

    fn is_activatable(&self) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_is_activatable(self.to_glib_none().0))
        }
    }

    fn is_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q) -> bool {
        unsafe {
            from_glib(ffi::gtk_cell_area_is_focus_sibling(self.to_glib_none().0, renderer.to_glib_none().0, sibling.to_glib_none().0))
        }
    }

    fn remove<P: IsA<CellRenderer>>(&self, renderer: &P) {
        unsafe {
            ffi::gtk_cell_area_remove(self.to_glib_none().0, renderer.to_glib_none().0);
        }
    }

    fn remove_focus_sibling<P: IsA<CellRenderer>, Q: IsA<CellRenderer>>(&self, renderer: &P, sibling: &Q) {
        unsafe {
            ffi::gtk_cell_area_remove_focus_sibling(self.to_glib_none().0, renderer.to_glib_none().0, sibling.to_glib_none().0);
        }
    }

    fn render<P: IsA<Widget>>(&self, context: &CellAreaContext, widget: &P, cr: &cairo::Context, background_area: &gdk::Rectangle, cell_area: &gdk::Rectangle, flags: CellRendererState, paint_focus: bool) {
        unsafe {
            ffi::gtk_cell_area_render(self.to_glib_none().0, context.to_glib_none().0, widget.to_glib_none().0, mut_override(cr.to_glib_none().0), background_area.to_glib_none().0, cell_area.to_glib_none().0, flags.to_glib(), paint_focus.to_glib());
        }
    }

    fn request_renderer<P: IsA<CellRenderer>, Q: IsA<Widget>>(&self, renderer: &P, orientation: Orientation, widget: &Q, for_size: i32) -> (i32, i32) {
        unsafe {
            let mut minimum_size = mem::uninitialized();
            let mut natural_size = mem::uninitialized();
            ffi::gtk_cell_area_request_renderer(self.to_glib_none().0, renderer.to_glib_none().0, orientation.to_glib(), widget.to_glib_none().0, for_size, &mut minimum_size, &mut natural_size);
            (minimum_size, natural_size)
        }
    }

    fn set_focus_cell<P: IsA<CellRenderer>>(&self, renderer: &P) {
        unsafe {
            ffi::gtk_cell_area_set_focus_cell(self.to_glib_none().0, renderer.to_glib_none().0);
        }
    }

    fn stop_editing(&self, canceled: bool) {
        unsafe {
            ffi::gtk_cell_area_stop_editing(self.to_glib_none().0, canceled.to_glib());
        }
    }

    fn connect_add_editable<F: Fn(&Self, &CellRenderer, &CellEditable, &gdk::Rectangle, TreePath) + 'static>(&self, f: F) -> u64 {
        unsafe {
            let f: Box_<Box_<Fn(&Self, &CellRenderer, &CellEditable, &gdk::Rectangle, TreePath) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "add-editable",
                transmute(add_editable_trampoline::<Self> as usize), Box_::into_raw(f) as *mut _)
        }
    }

    fn connect_apply_attributes<F: Fn(&Self, &TreeModel, &TreeIter, bool, bool) + 'static>(&self, f: F) -> u64 {
        unsafe {
            let f: Box_<Box_<Fn(&Self, &TreeModel, &TreeIter, bool, bool) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "apply-attributes",
                transmute(apply_attributes_trampoline::<Self> as usize), Box_::into_raw(f) as *mut _)
        }
    }

    fn connect_focus_changed<F: Fn(&Self, &CellRenderer, TreePath) + 'static>(&self, f: F) -> u64 {
        unsafe {
            let f: Box_<Box_<Fn(&Self, &CellRenderer, TreePath) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "focus-changed",
                transmute(focus_changed_trampoline::<Self> as usize), Box_::into_raw(f) as *mut _)
        }
    }

    fn connect_remove_editable<F: Fn(&Self, &CellRenderer, &CellEditable) + 'static>(&self, f: F) -> u64 {
        unsafe {
            let f: Box_<Box_<Fn(&Self, &CellRenderer, &CellEditable) + 'static>> = Box_::new(Box_::new(f));
            connect(self.to_glib_none().0, "remove-editable",
                transmute(remove_editable_trampoline::<Self> as usize), Box_::into_raw(f) as *mut _)
        }
    }
}

unsafe extern "C" fn add_editable_trampoline<P>(this: *mut ffi::GtkCellArea, renderer: *mut ffi::GtkCellRenderer, editable: *mut ffi::GtkCellEditable, cell_area: *mut gdk_ffi::GdkRectangle, path: *mut libc::c_char, f: glib_ffi::gpointer)
where P: IsA<CellArea> {
    callback_guard!();
    let f: &Box_<Fn(&P, &CellRenderer, &CellEditable, &gdk::Rectangle, TreePath) + 'static> = transmute(f);
    let path = from_glib_full(ffi::gtk_tree_path_new_from_string(path));
    f(&CellArea::from_glib_none(this).downcast_unchecked(), &from_glib_none(renderer), &from_glib_none(editable), &from_glib_none(cell_area), path)
}

unsafe extern "C" fn apply_attributes_trampoline<P>(this: *mut ffi::GtkCellArea, model: *mut ffi::GtkTreeModel, iter: *mut ffi::GtkTreeIter, is_expander: glib_ffi::gboolean, is_expanded: glib_ffi::gboolean, f: glib_ffi::gpointer)
where P: IsA<CellArea> {
    callback_guard!();
    let f: &Box_<Fn(&P, &TreeModel, &TreeIter, bool, bool) + 'static> = transmute(f);
    f(&CellArea::from_glib_none(this).downcast_unchecked(), &from_glib_none(model), &from_glib_borrow(iter), from_glib(is_expander), from_glib(is_expanded))
}

unsafe extern "C" fn focus_changed_trampoline<P>(this: *mut ffi::GtkCellArea, renderer: *mut ffi::GtkCellRenderer, path: *mut libc::c_char, f: glib_ffi::gpointer)
where P: IsA<CellArea> {
    callback_guard!();
    let f: &Box_<Fn(&P, &CellRenderer, TreePath) + 'static> = transmute(f);
    let path = from_glib_full(ffi::gtk_tree_path_new_from_string(path));
    f(&CellArea::from_glib_none(this).downcast_unchecked(), &from_glib_none(renderer), path)
}

unsafe extern "C" fn remove_editable_trampoline<P>(this: *mut ffi::GtkCellArea, renderer: *mut ffi::GtkCellRenderer, editable: *mut ffi::GtkCellEditable, f: glib_ffi::gpointer)
where P: IsA<CellArea> {
    callback_guard!();
    let f: &Box_<Fn(&P, &CellRenderer, &CellEditable) + 'static> = transmute(f);
    f(&CellArea::from_glib_none(this).downcast_unchecked(), &from_glib_none(renderer), &from_glib_none(editable))
}
