import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('store', params.store_id);
  },
  actions: {
    save: function(model) {
      model.save().then( () => {
        this.transitionTo('stores');
      }, () =>  {
        this.set('error', 'Unable to Save Change');
      });
    },
    cancel: (model) => {
      model.rollback();
      this.transitionTo('stores');
    },
    destroy: function(model) {
      model.destroyRecord();
      this.transitionTo('stores');
    }
  }
});
