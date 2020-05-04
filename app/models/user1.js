var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;


var UserSchema = new Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true, unique: true },
    place: { type: String, lowercase: true, required: true },
    join: { type: String, required: true, lowercase: true },
    match: { type: String, required: true, lowercase: true }
  });

module.exports = mongoose.model('User1',UserSchema);