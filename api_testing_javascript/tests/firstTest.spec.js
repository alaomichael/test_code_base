const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;
const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({"ok": "response"});
});

describe('First test', () => {
    it('Ok response', () => {
        request(app)
        .get('/first')
        .end((err,res) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });

    it('Mocky Ok Response', (done) => {
        request('https://run.mocky.io')
            .get('/v3/ce4f61ce-2d1a-47ad-b767-4e290d57cc91')
        .expect(200,done)
    })
});