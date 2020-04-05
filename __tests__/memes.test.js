const { getMeme, getMemes } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', async() => {
    
    return request(app) 
      .post('api/v1/memes')
      .send({
        top: 'test top',
        image: 'testingimage@thistest.com',
        bottom: 'test bottom'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'test top',
          image: 'testingimage@thistest.com',
          bottom: 'test bottom',
          __v: 0
        });
      });
  });
});
// POST /api/v1/memes to create a meme
// GET /api/v1/memes to get all memes
// GET /api/v1/memes/:id to get a meme by id
// PUT /api/v1/memes/:id to update a meme
// DELETE /api/v1/memes/:id to delete a meme
