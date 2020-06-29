/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

const { randomBytes } = require('crypto');

const commentsByPost = require('../repository/commentsByPost');

const getComments = (postId) => commentsByPost[postId] || [];

const createComment = ({ comment, postId }) => {
  const comments = commentsByPost[postId] || [];
  comments.push({
    id: randomBytes(4).toString('hex'),
    ...comment,
  });

  commentsByPost[postId] = comments;

  return commentsByPost[postId];
};

module.exports = {
  getComments,
  createComment,
};
