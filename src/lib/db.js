var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI

module.exports = function(app) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });
  
//mongoose.connect('mongodb://localhost/data/db');

  // mongoose.set('debug', true);

  return mongoose;
};
