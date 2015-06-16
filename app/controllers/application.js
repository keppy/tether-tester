import Ember from 'ember';

export default Ember.Controller.extend({
  toggleProp: false,

  actions: {
    toggleTheProp() {
      this.toggleProperty('toggleProp');
    }
  }
});
