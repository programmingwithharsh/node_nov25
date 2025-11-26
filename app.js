// import express from 'express'; // es6 import module
const express = require('express'); // es5 import module
const cors = require('cors'); // es5 import module
const app = express();
app.use(cors());
app.use(express.json());

// GET ALL API
app.get('/', (req, res) => {
    let users = [
        {
            id: 1,
            fullname: 'Aditi',
            email: 'Aditi@gmail.com',
            password: 'Aditi123'
        },
        {
            id: 2,
            fullname: 'Amit',
            email: 'Amit@gmail.com',
            password: 'Amit123'
        },
        {
            id: 3,
            fullname: 'Devender',
            email: 'Devender@gmail.com',
            password: 'Devender'
        },
        {
            id: 4,
            fullname: 'Dinesh',
            email: 'Dinesh@gmail.com',
            password: 'Dinesh'
        },
        {
            id: 5,
            fullname: 'Gaurav',
            email: 'Gaurav@gmail.com',
            password: 'Gaurav'
        }
    ]

    // res.send('This is node.js GET API')
    res.json(users);
})
// POST API
app.post('/', (req, res) => {
    res.json({ 'status': 'post request', 'body': req.body.name })
})
// PUT API
app.put('/', (req, res) => {
    res.json({ 'status': 'put request', 'body': req.body.name })
})
// DELETE API
app.delete('/', (req, res) => {
    res.json({ 'status': 'delete request' })
})

app.listen(3000);