import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('store');
  },
  actions: {
    save: function(model) {
      model.save().then(function() {
        // succes
      }, function() {
        // fail
      });
    },
    cancel: function(model) {
      model.destroyRecord();
      this.transitionTo('stores');
    }
   }
});
