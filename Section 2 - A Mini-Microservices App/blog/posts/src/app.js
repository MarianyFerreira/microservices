/* ****************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 *************************************************************************** */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const routes = require('./routes');
const ErrorHandler = require('./utils/errorHandler');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors({ origin: true }));

    // Parses the body of POST/PUT request
    // to JSON
    this.express.use(bodyParser.json());
  }

  routes() {
    // Add the routes to the /api endpoint
    this.express.use(routes);

    // error handler middleware
    this.express.use((req, res, next) => next(
      new ErrorHandler(
        404,
        `Sorry, unless you really expected to find our 404 error message, the
          API you are looking for does not exist, has been
          moved or deleted.`,
      ),
    ));

    // eslint-disable-next-line no-unused-vars
    this.express.use((error, req, res, next) => res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal App Error',
      },
    }));
  }
}

module.exports = new App().express;
