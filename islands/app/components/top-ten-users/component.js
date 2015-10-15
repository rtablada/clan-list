import Ember from 'ember';

export default Ember.Component.extend({
  loadData: Ember.on('init', function() {
    Ember.$.ajax({
      url: '/users?order_by=score&per_page=10',
    }).then((response) => {
      this.set('users', response.data);
    });
  }),
});
