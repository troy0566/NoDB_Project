
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const controller = require('./controller/controller.js');
const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get('/api/data', controller.getData)
app.post('/api/data', controller.addData);
//app.get('/api/data', controller.readData);
app.put('/api/data/:id', controller.updateData);
app.delete('/api/data/:id', controller.deleteData);

app.listen(port, () => {console.log("Listening")});