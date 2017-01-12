/* eslint-disable no-debugger */
import Ember from 'ember';

const { Controller/*, get*/ } = Ember;
// const { keys } = Object;

export default Controller.extend({
  actions: {
    submit(changeset) {
      debugger;
      return changeset.save();
      
      // // return changeset.save();
      // if ((changeset && get(changeset, 'isDirty'))) {
      //   let snapshot = changeset.snapshot();

      //   return changeset
      //     .cast(keys(changeset._content))
      //     .validate()
      //     .then((stuff) => {
      //       if (get(changeset, 'isValid')) {
      //         changeset.execute();
      //       }
      //     }).catch(() => {
      //       changeset.restore(snapshot);
      //     });
      // }
    },

    rollback(changeset) {
      return changeset.rollback();
    },

    validate(/*{ key, newValue, oldValue, changes, content }*/) {
      debugger;
      // lookup a validator function on your favorite validation library
      // should return a Boolean
      return true;
    }

    // validateProperty(changeset, property) {
    //   console.log('validateProperty');
    //   console.log(changeset);
    //   console.log(property);
    //   return changeset.validate(property);
    // }
  }
});
