import Ember from 'ember';

export function strDasherize(params/*, hash*/) {
  if (params[0] && params[0].dasherize) {
    return params[0].dasherize();
  }
}

export default Ember.Helper.helper(strDasherize);
