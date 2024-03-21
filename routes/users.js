const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
require('dotenv').config();

const mongoURL = process.env.db_URL;
mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  name: String,
  passport: String,
  profileImage: String,
  bio: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports  = mongoose.model('user', userSchema);