/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

const router = require('express').Router();

const controller = require('../controller');

router.get('/', (req, res) => {
  res.status(200).send('[Posts]: Everything is fine, cheers.');
});

router.get('/posts', (req, res) => {
  res.status(200).send(
    controller.getPosts(),
  );
});

router.post('/posts', ({ body = {} }, res) => {
  res.status(201).send(
    controller.createPost(body),
  );
});

module.exports = router;
