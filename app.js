import express from 'express'; // es6 import module

const app = express();

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
            id: 1,
            fullname: 'Amit',
            email: 'Amit@gmail.com',
            password: 'Amit123'
        }
    ]

    // res.send('This is node.js GET API')
    res.json(users);
})

app.listen(3000);