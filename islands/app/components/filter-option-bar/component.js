import Ember from 'ember';

export default Ember.Component.extend({
  options: [
    {
      name: 'Order By',
      values: ['Name', 'Score', 'Friends', 'Clans'],
    },
  ],

  didInsertElement() {
    this.$('.dropdown-button').dropdown();
  },
});
