import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('products', function() {
    this.route('all');
    this.route('new');
    this.route('available-products', { path: '/available' })
  });
  this.route('product', {path: '/products/:id'});
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
