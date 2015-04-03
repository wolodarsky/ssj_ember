import Ember from 'ember';

export default Ember.Controller.extend({
  stateNames: Ember.inject.service(),
  /**
   * Reduce the shops to a group states
   */
  groupedStores: Ember.computed('model.@each.state', function() {
    let states = this.get('model').sortBy('state');
    let stateLongNames = this.get('stateNames').get('stateMap');
    return Ember.$.map(states.reduce((arr, item) => {
      let state = item.get('state');
      arr[state] = arr[state] || [];
      arr[state].push(item);
      return arr;
    }, {}), (stores, state) => {
      return {
        state: state,
        longState: stateLongNames[state],
        stores: stores
      };
    });
  })
});
