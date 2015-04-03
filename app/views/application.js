import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.$().foundation({
      offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'move',
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click : true
      }
    }); //or Ember.$(document).foundation();
  }
});
