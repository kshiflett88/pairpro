const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'users'
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId, // Connects to profile
    ref: 'profile'
  },
  title: {
    type: String, 
    required: true
  },
  text: {
    type: String, 
    required: true
  },
  tech: {
    type: [String], 
    required: true
  },
  group: {
    type: Number, 
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes : [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);