## Get Started
### Ember Init
    npm install -g ember-cli // install ember command line
    ember new my_app         // initialize an ember app

### Add a route
    ember g route about
````javascript
  /* app/route.js */
  Router.map(function() {
    this.route('about');
  });
````
`about.js` added to `app/routes`, and `about.hbs` to `app/templates`
````javascript
  /* app/routes/about.js */
  import Ember from 'ember';
  export default Ember.Route.extend({
  });
````

`index` route is special: it does NOT require an entry in the router's mapping.
