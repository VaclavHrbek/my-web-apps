const client = require('./connect_database');


const express = require('express')
const app = express()
const port = 3000

const get_one_todo_item = async () => {
    try {
        const database = client.db('to-do');
        const items = database.collection('to-do-items');
        const item = await items.findOne();
        return item;
    } finally {
        // await client.close();
    }
}

app.get('/', async (req, res) => {
    try {
        const item = await get_one_todo_item();
        res.send(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1, cb2])
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
