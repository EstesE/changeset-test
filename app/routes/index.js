import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      firstName: 'John',
      lastName: 'Doe',
      contact: {
        phone: '5085362148',
        email: 'test@testmail.com'
      },
      aliases: [
        { name: 'John Doe' },
        { name: 'Grits N Gravy' }
      ]
    };
  }
});
