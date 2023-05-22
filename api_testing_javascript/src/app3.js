const express = require('express')
const app3 = express()

app3.get('/test3/courses', (req, res) => {
    res.status(200).json({ name: "api testing" })
})

app3.get('/test3/course', (req, res) => {
    let name = req.query.name;
    res.json({ id: "1", name: name })
})

app3.get('/test3/course/:id', (req, res) => {
    let id = req.params.id;
    let name;
    if (id === '1') {
        name = 'mocha';
    }
    res.json({ id: id, name: name })
})

app3.post('/test3/course', (req, res) => {
    let name = req.body.name;
    console.log('name ',name)
    res.json({ id: '2', name: name })
})

module.exports = app3;