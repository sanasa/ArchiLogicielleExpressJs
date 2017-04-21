var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI;
var url="mongodb://sana:Allah7akbar@ds115071.mlab.com:15071/movies";

module.exports = function(app) {
  mongoose.Promise = global.Promise;
  mongoose.connect(url, {
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
