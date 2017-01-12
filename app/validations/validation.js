import { 
  validatePresence,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence({ presence: true, message: '{description} is required' }),
  ],
  lastName: [
    validatePresence({ presence: true, message: '{description} is required'})
  ],
  'contact.phone': [
    validateFormat({ presence: true, type: 'phone', message: 'Check format' })
  ],
  contact: {
    email: [
    validatePresence({ presence: true, message: '{description} is required'})
  ]
  },
  'contact.email': [
    validatePresence({ presence: true, message: '{description} is required'})
  ]
};
