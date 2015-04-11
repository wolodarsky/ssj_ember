import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['vee-card'],

  actions: {

    save: function(model) {
      model.save().then( () => {
        this.transitionTo('shops');
      }, () =>  {
        this.set('error', 'Unable to Save Change');
      });
    },

    cancel: (model) => {
      model.rollback();
      this.transitionTo('shops');
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
