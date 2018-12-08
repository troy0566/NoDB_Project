import React, { Component } from 'react';
import axios from 'axios';
import ShowResults from "./ShowResults";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  
  componentDidMount(){
      axios.get('/api/data').then( response => {
      this.setState({ data: response.data });
    });
  }
     
  render(){
    if (this.state.data.collection)
        var images = this.state.data.collection.items
    )
    return (
      <div>
        <ShowResults images />
      </div>
    );
  }
}

export default App;
