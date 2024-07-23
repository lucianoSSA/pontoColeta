import express from 'express';

const app = express();

app.use(express.json());

const coleta = []

app.post('/pontoColeta', (req, res) => {

coleta.push = (req.body);
 
res.status(201).json(req.body)
})

app.get ('/pontoColeta', async (req, res) => {
 res.status(200).json(coleta);
 console.log(coleta)
})

app.listen(3000)
 
