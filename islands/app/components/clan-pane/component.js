import Ember from 'ember';

export default Ember.Component.extend({
  clans: Ember.computed('data', function() {
    const data = this.get('data');
    const clans = [];

    for (let property in data) {
      clans.push(data[property]);
    }

    return clans;
  }),
});
