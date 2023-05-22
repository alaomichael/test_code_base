const app = require('../src/app3');
const request = require('supertest');
const expect = require('chai').expect;

describe('Post requests', () => {
    it('json request/response', () => {
        request(app)
            .post('/test3/course')
            .send({ "name": "supertest" })
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.name).to.be.equal('supertest')
            })
    })

    it('form request/response', (done) => {
        request(app)
            .post('/test3/course')
            .send('name=supertest') // .send('name=supertest&type=post&status=active')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200, { "id": "2", "name": "supertest" }, done);
    })


})