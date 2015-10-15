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

  actions: {
    showClanDetails(clan) {
      Ember.$.ajax({
        url: `/clans/${clan.id}`,
      }).then((result) => {
        this.set('clanDetail', result);
      });
    },

    hideDetail() {
      this.set('clanDetail', null);
    },
  },
});
