import Ember from 'ember';

export function arrLength(params/*, hash*/) {
  return Ember.get(params[0], 'length');
}

export default Ember.Helper.helper(arrLength);
