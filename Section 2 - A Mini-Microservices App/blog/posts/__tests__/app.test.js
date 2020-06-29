/* ****************************************************************************
 * Copyright (c) 2020 MYF
 * All rights reserved.
 *************************************************************************** */

const supertest = require('supertest');
const app = require('../src/app');

describe('Startup server', () => {
  it('Wrong GET Request', async (done) => {
    const { body } = await supertest(app).get('/whateverYouLike');
    expect(body).toMatchObject({
      error: {
        status: 404,
        message: `Sorry, unless you really expected to find our 404 error message, the
          API you are looking for does not exist, has been
          moved or deleted.`,
      },
    });
    done();
  });

  it('Gets / endpoint', async (done) => {
    const response = await supertest(app).get('/');
    expect(response).toMatchObject({
      status: 200,
    });
    done();
  });
});
