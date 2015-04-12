import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Configuration from 'simple-auth/configuration';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function(transition) {
    var superResult = this._super(transition);
    var sessionPropertyName = Configuration.sessionPropertyName;

    if (this.get(sessionPropertyName).get('isAuthenticated') &&
        !this.get(sessionPropertyName).get('isAdmin')) {
      transition.abort();
      this.transitionTo(Configuration.routeAfterAuthentication);
    }

    return superResult;
  }
});
