import React, { Component } from 'react';
import axios from 'axios';
import ShowResults from './ShowResults.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      media: [],
      favs: [],
    }
  }
  
  componentDidMount(){
      axios.get('/api/data')
      .then( response => 
        {
          this.setState({ data: response.data });
        }
      )
      .then( media => 
         {
            this.setState({ media: this.state.data.collection.items})
         }
      )
      .then( media => 
        { 
          for(var i=0;i < this.state.media.length;i++){
            this.state.media[i] = Object.assign({id: i}, this.state.media[i])
         }
        }
     );;
  }
     
  render(){
    console.log(this.state.media);
    var items = [];
    var showimages = [];
    if (this.state.data.collection){
        items = this.state.media;
        showimages = items.map(item => {
          return item.links[0].href;
        })
    }
    return (
      <div>
        <ShowResults nasaimages = {showimages}/>
      </div>
    );
  }
}

export default App;
