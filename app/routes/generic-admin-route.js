import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Configuration from 'simple-auth/configuration';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    var superResult = this._super(transition);

    console.log('testing');
    if (!this.get(Configuration.sessionPropertyName).get('isAdmin')) {
      transition.abort();
      this.get(Configuration.sessionPropertyName).set('attemptedTransition', transition);
      Ember.assert('The route configured as Configuration.authenticationRoute cannot implement the AuthenticatedRouteMixin mixin as that leads to an infinite transitioning loop!', this.get('routeName') !== Configuration.authenticationRoute);
      transition.send('sessionRequiresAuthentication');
      console.log('testing');
    }

    return superResult;
  }
});
