import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      items: [],
      item: []
    }
  }
  
  componentDidMount(){
      axios.get('/api/data')
      .then( response => 
        {
          this.setState({ data: response.data });
        }
      )
      .then( items => 
         {
            this.setState({ items: this.state.data.collection.items})
         }
      )
      .then( items => 
        { 
          for(var i=0;i < this.state.items.length;i++){
            this.state.items[i] = Object.assign({id: i}, this.state.items[i])
            if (i===0) this.setState({item: this.state.items[0]})
          }
        }
        
      );
      
  }
  
  nextItem = () => {
    const newIndex = this.state.item.id+1;
    this.setState({
      item: this.state.items[newIndex]
    })
  }

  prevItem = () => {
    const newIndex = this.state.item.id-1;
    this.setState({
      item: this.state.items[newIndex]
    })
  }

  addFavorite = () => {
    const newIndex = this.state.item.id-1;
    this.setState({
      item: this.state.items[newIndex]
    })
  }

  
  render(){
    const {item} = this.state;
   
    return (
      
      <div className="App">
          <section>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Nasa slideshow NoDB Project.</h1>
          </section>

         <button onClick={() => this.prevItem()} 
           disabled={this.state.item.id === 0}>Prev
         </button> 

         <button onClick={() => this.nextItem()} 
          disabled={this.state.item.id === this.state.items.length-1}>Next
         </button>


         <div > 
            <div>
              {item.length !== 0 ? <Card item={item}/>: "not ready"}
            </div>
         </div>
      
         <button onClick={() => this.AddFavorite()} 
             disabled={this.state.items.length === 0}>Add to Favorites
         </button>      
      
      
      </div>

    );
  }
}
export default App;

