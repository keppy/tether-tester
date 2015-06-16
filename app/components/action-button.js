import Ember from 'ember';

export default Ember.Component.extend({
  trayTetherConstraints: [
    {
      to: 'window',
      pin: true
    }
  ],

  actions: {
    myAction() {
      console.log('I fire for you, bb.');
    }
  }
});
