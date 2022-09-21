import express from 'express';
import bodyParser from 'body-parser';
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
    messages.push({...message, id: Math.floor(Math.random() * 1000000)});
    res.json(messages);
})


app.listen(PORT, () => {
    console.log(`process started on port ${PORT}`);
});
