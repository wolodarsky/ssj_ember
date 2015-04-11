import GenericAdminRoute from '../generic-admin-route';

export default GenericAdminRoute.extend({
  model: function() {
    return this.store.createRecord('store');
  },
  actions: {
    save: function(model) {
      model.save().then( () => {
        this.transitionTo('stores');
      }, (error) => {
        console.log(error.responseJSON.error);
      });
    },
    cancel: function(model) {
      model.destroyRecord();
      this.transitionTo('stores');
    }
   }
});
