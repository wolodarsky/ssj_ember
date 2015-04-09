import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('store');
  },
  actions: {
    save: function(model) {
      model.save().then( () => {
        this.transitionTo('stores');
      }, function() {
        this.set('error', "Unable to Save");
      });
    },
    cancel: function(model) {
      model.destroyRecord();
      this.transitionTo('stores');
    }
   }
});
