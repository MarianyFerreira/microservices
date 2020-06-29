/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

const { randomBytes } = require('crypto');

const posts = require('../repository/posts');

const getPosts = () => posts;

const createPost = (post = {}) => {
  const id = randomBytes(4).toString('hex');
  posts[id] = {
    id,
    ...post,
  };
  return posts[id];
};

module.exports = {
  getPosts,
  createPost,
};
