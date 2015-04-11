import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['vee-card'],
  stateNames: Ember.inject.service(),

  actions: {

    save: function(model) {
      model.save().then( () => {
        this.transitionTo('shops');
      }, () =>  {
        this.set('error', 'Unable to Save Change');
      });
    },

    cancel: function(model) {
      this.set('isEditing', false);
      model.rollback();
    },

    destroy: function(model) {
      model.destroyRecord();
      this.transitionTo('shops');
    },

    editShop: function() {
      this.set('isEditing', true);
    }

  }

});
