const axios = require('axios');

var data = [];
var id = 0;

//data.push("This is a test");
const getData = (req, res, next) => {
    axios.get('https://images-api.nasa.gov/search?q=mars')
    .then( results => {
        data = results.data
        res.status(200).json(data);
    })};
    
  const addData = (req, res, next) => {
    req.body.id = data.length;
    data.push(req.body);
    res.json(data);
  };
  
  const deleteData = (req, res, next) => {
    const index = data.findIndex(data => +data.id === +req.params.id);
    students.splice(index, 1);
    res.json(data);
  };
  
  const updateData = (req, res, next) => {
    const index = data.findIndex(data => +data.id === +req.params.id);
  
    data[index] = req.body;
    res.json(data);
  };

  module.exports = {
    getData,
    addData,
    deleteData,
    updateData
  };


