import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: config.DS.host,

  authorize(xhr) {
    let { user_email, token } = this.get('session.data.authenticated');
    let authData = `Token token="${token}", user_email="${user_email}"`;
    xhr.setRequestHeader('Authorization', authData);
  },

  init() {
    this._super(...arguments);

    this.set('headers', {
      'x-vendor-appVersion': config.APP.appVersion,
      'x-vendor-appEnvironment': config.environment
    });
  },

  urlForFindRecord(query, modelName, snapshot) {
    let url = this._super(...arguments);

    return this._processIncludes(url, snapshot);
  },

  urlForFindAll(query, modelName, snapshot) {
    let url = this._super(...arguments);

    return this._processIncludes(url, snapshot);
  },

  _processIncludes(url, snapshot) {
    let options = snapshot && snapshot.adapterOptions;

    if (options && options.include) {
      url = `${url}?include=${options.include}`;
    }

    return url;
  }
});