
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const controller = require('./controller/controller.js');
const port = 3002;

const app = express();

app.use(json());
app.use(cors());

app.get('/api/data', controller.getData);

app.put('/api/data/:id', controller.updateData);

app.post('/api/data', controller.addData);

app.delete('/api/data/:id', controller.deleteData);

app.listen(port, () => {console.log("Listening")});