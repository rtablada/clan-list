import Ember from 'ember';

export function intAdd(params/*, hash*/) {
  return params.reduce((carry, i) => {
    return carry + i;
  });
}

export default Ember.Helper.helper(intAdd);
