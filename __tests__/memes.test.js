const { getMeme, getMemes } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme', async() => {
    
    return request(app) 
      .post('/api/v1/memes')
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

  it('gets all memes', async() => {
    const memes = await getMemes();

    return request(app) 
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id', async() => {
    const meme = await getMeme();

    return request(app) 
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });

  it('updates a meme', async() => {
    const meme = await getMeme();

    return request(app)
      .patch(`/api/v1/memes/${meme._id}`)
      .send({ image: 'https://media.giphy.com/media/eYilisUwipOEM/giphy.gif' })
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
          image: 'https://media.giphy.com/media/eYilisUwipOEM/giphy.gif'
        });
      });
  });

  it('deletes a meme', async() => {
    const meme = await getMeme();

    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
});


