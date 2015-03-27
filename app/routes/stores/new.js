import Ember from 'ember';

export default Ember.Route.extend({
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
