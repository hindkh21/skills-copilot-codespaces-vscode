// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');

// Create new comment
router.post('/posts/:postId/comments', (req, res, next) => {
    // Create new comment
    let newComment = new Comment({
        text: req.body.text,