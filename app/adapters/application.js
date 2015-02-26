import Ember from "ember";
import DS from "ember-data";

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  /**
   * Gets a CSRF token from the server and sets it as a header
   */
  getToken: function() {
    var self = this,
        tokenURL = window.location.origin + '/' + this.get('namespace') + '/csrf';
    Ember.$.getJSON(tokenURL).then(function(response) {
      self.set('headers', { 'X-CSRF-Token': response["authenticity_token"] });
    });
  }.on('init')
});
