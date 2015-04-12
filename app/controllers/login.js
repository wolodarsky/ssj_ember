import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      authenticate: function() {
        let data = this.getProperties('identification', 'password');
        return this.get('session')
            .authenticate('simple-auth-authenticator:devise', data)
          .then( () => {
            // success handled by sessionAuthenticationSucceeded()
            // on ApplicationRoute
          }, (response) => {
            this.set('error', response.error);
          }
        );
      }
  }
});
