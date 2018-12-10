const axios = require('axios');

var data = [];
var favorites = [];
var id = 0;

const getData = (req, res, next) => {
    console.log("calling getData");
    axios.get('https://images-api.nasa.gov/search?q=mars')
    .then( results => {
        data = results.data
        res.status(200).json(data);
    })
  };
    
  const addData = (req, res, next) => {
    favorites.push(req.body);
    res.json(favorites);
  };
   const updateData = (req, res, next) => {
    const index = favorite.findIndex(favorite => +favorite.id === +req.params.id);
    favorite[index] = req.body;
    res.json(favorites);
  };
  const deleteData = (req, res, next) => {
    const index = favorites.findIndex(favorite => +favorite.id === +req.params.id);
    favorites.splice(index, 1);
    res.json(favorites);
  };

  module.exports = {
    getData,
    addData,
    updateData,
    deleteData
  };


