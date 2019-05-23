import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'oslr-ui2/config/environment';
const host = config.DS.host || '';
const namespace = config.apiNamespace;
const serverTokenEndpoint = [host, namespace, 'token'];
export default OAuth2PasswordGrant.extend({

  serverTokenEndpoint: serverTokenEndpoint.join('/')

});