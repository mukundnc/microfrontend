import express from 'express';
import bodyParser from 'body-parser';
import { v1 } from 'uuid';
const app = express();
const api = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', api);

const messages = [];

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.post('/messages', (req, res) => {
    const message = req.body;
    messages.push({...message, id: v1()});
    res.json(message);
})

const todos = [];

api.get('/todos', (req, res) => {
    res.json(todos);
})

api.post('/todos', (req, res) => {
    const todo = {...req.body, id: v1()};
    todos.push(todo);
    res.json(todo);
})

api.put('/todos/:id', (req, res) => {
    const payload = req.body;
    todos.map(x => {
        if(x.id === req.params.id){
            x.msg = payload.msg;
            x.check = payload.check;
        }
    })
    res.json(payload);
})

app.listen(PORT, () => {
    console.log(`process started on port ${PORT}`);
});
