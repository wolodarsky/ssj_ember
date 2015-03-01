import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('collections');
  this.route('contact');
  this.resource('stores', function() {
    this.resource('stores.store', { path: ':store_id' });
    this.route('new');
  });
  this.route('about');
});

export default Router;
