/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

const router = require('express').Router();

const controller = require('../controller');

router.get('/', (req, res) => {
  res.status(200).send('[Comments]: Everything is fine, cheers.');
});

router.get('/posts/:id/comments', ({ params: { id } = {} }, res) => {
  res.status(200).send(
    controller.getComments(id),
  );
});

router.post('/posts/:id/comments', ({ body = {}, params: { id } = {} }, res) => {
  res.status(201).send(
    controller.createComment({ postId: id, comment: body }),
  );
});

module.exports = router;
