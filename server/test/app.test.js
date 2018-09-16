const request = require('supertest');
const app = require('../app').app;

it('should return nums array', done => {
  const nums = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'e' }
  ];

  request(app)
    .get('/api/users')
    .expect(200)
    .expect(nums)
    .end(done);
});
