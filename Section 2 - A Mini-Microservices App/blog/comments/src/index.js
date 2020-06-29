/* *************************************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 ************************************************************************************************ */

const app = require('./app');

const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});

// Properly shutdown. Node doesn't handle SIGINT or SIGTERM by default.
function shutdown() {
  if (server !== undefined) {
    server.close((err) => {
      if (err) {
        process.exitCode = 1;
      }
      process.exit();
    });
  }
}

process.on('SIGINT', () => {
  shutdown();
});

process.on('SIGTERM', () => {
  shutdown();
});

module.exports = server;
