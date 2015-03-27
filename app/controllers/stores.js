import Ember from 'ember';

export default Ember.Controller.extend({
  groupedStores: function() {
    let ojoj = this.get('model');
    return Ember.$.map(ojoj.reduce((arr, item) => {
      let state = item.get('state');
      arr[state] = arr[state] || [];
      arr[state].push(item);
      return arr;
    }, {}), (stores, state) => {
      console.log(state);
      return {
        state: state,
        stores: stores
      };
    });
  }.property('model.@each.state')
});
