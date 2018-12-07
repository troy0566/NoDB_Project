import React, { Component } from 'react';
import axios from 'axios';
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
     
  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        {this.state.data.map((item) => {
            
        })}    
      </div>
    );
  }
}

export default App;
