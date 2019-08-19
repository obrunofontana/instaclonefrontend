import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('feed');
  this.route('profile');
  this.route('explore');
  this.route('image-detail');
  this.route('edit-profile');
});

export default Router;
