import Ember from 'ember';

export default Ember.Component.extend({
  displayCount: false,
  actions: {
    hideCount() {
      this.set('displayCount', false);
    },
    showCount() {
      this.set('displayCount', true);
    }
  }
});
