const Meme = require('../lib/models/Meme');
const chance = require('chance').chance();

module.exports = async({ memesToCreate = 10 }) => {
  
  const tops = ['When you had too much', 'Stuck inside all day be like', 'When you procrastinate like', 'Looks like I should clean', 'Going for a walk seems nice'];
  const images = ['https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif', 'https://media.giphy.com/media/6VoDJzfRjJNbG/giphy.gif', 'https://media.giphy.com/media/1ViLp0GBYhTcA/giphy.gif', 'https://media.giphy.com/media/kv71PxaD9P3R6/giphy.gif', 'https://media.giphy.com/media/eAk2gsB40pZJK/giphy.gif'];
  const bottoms = ['But there is always more', 'YEEE HAHHH!', 'Don\'t play with me', 'What can I say?', 'Haters gunna hate'];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.pickone(tops),
    image: chance.pickone(images),
    bottom: chance.pickone(bottoms)
  })));
};
