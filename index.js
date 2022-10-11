import express from 'express';
import bodyParser from 'body-parser';
import { v1 } from 'uuid';
const app = express();
const api = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', api);

const messages = [
    {
        id: '11',
        message: 'Short message one here..'
    },
    {
        id: '12',
        message: 'Short message two here..'
    },
    {
        id: '13',
        message: 'Short message three here..'
    },
    {
        id: '14',
        message: 'Short message four here..'
    },
    {
        id: '15',
        message: 'Short message five here..'
    }
];

api.get('/messages', (req, res) => {
    res.json(messages);
})

api.post('/messages', (req, res) => {
    const message = req.body;
    messages.push({...message, id: v1()});
    res.json(message);
})

const todos = [
    {
        id: '22',
        msg: 'sample task one',
        check: false
    },
    {
        id: '23',
        msg: 'sample task two',
        check: false
    },
    {
        id: '24',
        msg: 'sample task three',
        check: true
    },
    {
        id: '25',
        msg: 'sample task four',
        check: false
    },
    {
        id: '26',
        msg: 'sample task five',
        check: true
    },
];

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
