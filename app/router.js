import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('collections', function() {
    this.route('spring-2015');
    this.route('fall-winter-2014');
    this.route('summer-2014');
  });

  this.route('contact');

  this.route('shops', function() {
    this.route('edit', { path: ':shop_id' });
    this.route('new');
  });

});

export default Router;
