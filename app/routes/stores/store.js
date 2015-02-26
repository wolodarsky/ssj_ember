import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('store', params.store_id);
  },
  actions: {
    save: function(model) {
      model.save().then(function() {
        // succes
      }, function() {
        // fail
      });
    }
  }
});
