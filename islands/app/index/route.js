import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    orderBy: {
      refreshModel: true,
    },
  },

  buildApiUrl(params) {
    let url = '/users';

    if (params.orderBy) {
      url += `?order_by=${params.orderBy}`;
    }

    return url;
  },

  model(params) {
    return Ember.$.ajax({
      url: this.buildApiUrl(params),
    });
  },
});
