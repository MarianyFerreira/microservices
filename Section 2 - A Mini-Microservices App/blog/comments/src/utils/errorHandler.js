/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

module.exports = ErrorHandler;
