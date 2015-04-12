import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['vee-card'],
  stateNames: Ember.inject.service(),

  actions: {

    save: function(model) {
      model.save().then( () => {
        this.set('isEditing', false);
      }, (error) =>  {
        console.log(error);
        this.set('error', 'Unable to Save Change');
      });
    },

    cancel: function(model) {
      this.set('isEditing', false);
      model.rollback();
    },

    destroy: function(model) {
      model.destroyRecord().then( () => {
        // deleted
      }, () => {
        this.set('error', 'There was an error processing the Delete. Please refresh');
      });
    },

    editShop: function() {
      this.set('error', '');
      this.set('isEditing', true);
    }

  }

});
