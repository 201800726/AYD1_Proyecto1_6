const supertest = require('supertest');

const {
  app,
  server
} = require('../app');
const api = supertest(app);
const mysql = require('../config/database');


describe('Post /login', () => {
  test('Given a valid username and password', async () => {
    const user = {
      usuario: 'admin',
      contrasenia: 'admin'
    };

    await api
      .post('/user/login')
      .send(user)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  });
});


describe('GET /report', () => {
  describe('Get all reports', () => {
    test('Should respond with a 200 status code', async () => {
      await api
        .get('/report')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    });
  });
});


describe('Tests with errors', () => {
  test('Non-existent image endpoint', async () => {
    await api
      .get('/image')
      .expect(200)
  });

  test('Report without content is not added', async () => {
    const report = {
      // descripcion: '',
      fechaProblema: '2021-06-22',
      ciudadano: 2,
      zona: 1,
      categoria: 1
    }

    await api
      .post('/report')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  });
});


afterAll(() => {
  mysql.end();
  server.close();
});