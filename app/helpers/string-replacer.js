import Ember from 'ember';

export function stringReplacer(params, hash) {
  return hash.string.replace(hash.search, hash.replace);
}

export default Ember.HTMLBars.makeBoundHelper(stringReplacer);
