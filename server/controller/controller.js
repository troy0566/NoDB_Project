const axios = require('axios');

var data = [];
var favorites = [];
var id = 0;

//data.push("This is a test");
const getData = (req, res, next) => {
    axios.get('https://images-api.nasa.gov/search?q=mars')
    .then( results => {
        data = results.data
        res.status(200).json(data);
    })};
    
  const addData = (req, res, next) => {
    req.body.id = favorites.length;
    favorites.push(req.body);
    res.json(favorite);
  };
  
  const deleteData = (req, res, next) => {
    const index = favorite.findIndex(favorite => +favorite.id === +req.params.id);
    favorite.splice(index, 1);
    res.json(favorite);
  };
  
  const updateData = (req, res, next) => {
    const index = favorite.findIndex(favorite => +favorite.id === +req.params.id);
  
    favorite[index] = req.body;
    res.json(favorite);
  };

  module.exports = {
    getData,
    addData,
    deleteData,
    updateData
  };


