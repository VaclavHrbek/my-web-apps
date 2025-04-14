import { Client } from './database.js';
import express from 'express';
import cors from 'cors';

const app = express()

const port = 3000
const client = new Client();


app.use(cors())

app.post('/push', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).send('Title and description are required');
        }
        console.log(req.body);
        // const newItem = await client.add_todo_item({ title, description });
        res.status(201).send(newItem);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/', async (req, res) => {
    try {
        const item = await client.get_all_todo_items();
        res.send(item);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`CORS-enabled web server listening on port ${port}`)
})
