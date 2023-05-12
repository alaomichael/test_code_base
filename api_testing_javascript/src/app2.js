const express = require('express')
const app2 = express()

app2.get('/courses', (req, res) => {
    res.status(200).json({ name: "api testing" })
})

app2.get('/course', (req, res) => {
    let name = req.query.name;
    res.json({ id: "1", name: name })
})

app2.get('/course/:id', (req, res) => {
    let id = req.params.id;
    let name;
    if (id === '1') {
        name = 'mocha';
    }
    res.json({ id: id, name: name })
})

app2.post('/course', (req, res) => {
    let name = req.body.name;
    res.json({ id: '2', name: name })
})

module.exports = app2;