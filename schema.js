const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        minlength: 5
    },
    content: {
        type: String,
        required: true,
        minlength: 50
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        default: "General"
    },
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    comments: [CommentSchema]
});

module.exports  = mongoose.model('user', userSchema);

