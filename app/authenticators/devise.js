import config from '../config/environment';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({

  serverTokenEndpoint: `${config.DS.host}/users/sign_in`,
  identificationAttributeName: 'user_email'
});