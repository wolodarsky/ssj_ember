import Ember from 'ember';

export default Ember.Route.extend({
  model: (params) => {
    return this.store.find('store', params.store_id);
  },
  actions: {
    save: (model) => {
      model.save().then( () => {
        // succes
      }, () =>  {
        // fail
      });
    },
    cancel: (model) => {
      model.rollback();
      this.transitionTo('stores');
    },
    destroy: (model) => {
      model.destroyRecord();
    }
  }
});
