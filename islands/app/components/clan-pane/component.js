import Ember from 'ember';

export default Ember.Component.extend({
  clans: Ember.computed('users', function() {
    const users = this.get('users');
    const clans = [];

    const data = users.reduce(function(carry, user) {
      const userClans = user.clans;

      return userClans.reduce(function(c2, clan) {
        if (c2[clan.tag]) {
          const x = c2[clan.tag];
          x.count++;

          c2[clan.tag] = x;
        } else {
          c2[clan.tag] = {
            value: clan,
            count: 1,
          };
        }

        return c2;
      }, carry);
    }, {});

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
