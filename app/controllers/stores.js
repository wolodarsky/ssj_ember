import Ember from 'ember';

export default Ember.Controller.extend({
  /**
   * Reduce the shops to a group states
   */
  groupedStores: Ember.computed('model.@each.state', function() {
    let states = this.get('model').sortBy('state')
    return Ember.$.map(states.reduce((arr, item) => {
      let state = item.get('state');
      arr[state] = arr[state] || [];
      arr[state].push(item);
      return arr;
    }, {}), (stores, state) => {
      return {
        state: state,
        stores: stores
      };
    });
  })
});
