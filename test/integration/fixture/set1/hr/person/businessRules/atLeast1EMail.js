// if exports is an array, it will be the same like loading multiple files...
//module.exports = require('cqrs-domain').defineBusinessRule({
module.exports = require('../../../../../../../').defineBusinessRule({
  name: 'atLeast1EMail', // optional, default is file name without extension
  description: 'at least one character should be in email address', // optional
  priority: 1 // optional, default Infinity, all business rules will be sorted by this value
}, function (changed, previous, events, command) {
  
  for (var i = 0, len = changed.get('emails').length; i < len; i++) {
    var email = changed.get('emails')[i];
    if (email.length < 1) {
      // throw new Error('an email address is needed');
      // or
      throw new Error(); // if no error message is defined then the description will be taken
    }
  }

});
