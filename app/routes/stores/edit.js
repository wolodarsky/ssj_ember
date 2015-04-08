import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
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
