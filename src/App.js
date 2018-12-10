import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Card from './Card';
//import ShowResults from './ShowResults.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      items: [],
      item: [],
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
  
  nextProperty = () => {
    const newIndex = this.state.item.id+1;
    this.setState({
      item: this.state.items[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.item.id-1;
    this.setState({
      item: this.state.items[newIndex]
    })
  }

  render(){
    //const {item} = this.state;

    // var showitems = []; var items = [];
    // if (this.state.data.collection !== 0){ //items.length
    //     items = this.state.items;
    //     showitems = items.map(item => {return item.links[0].href; })
    //  }
    
    const {items, item} = this.state; 
    return (
      
      <div className="App">
          <section>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Nada slideshow NoDB Project.</h1>
          </section>

         <button onClick={() => this.prevProperty()} 
           disabled={this.state.item.id === 0}>Prev
         </button> 

         <button onClick={() => this.nextProperty()} 
          disabled={this.state.item.id === this.state.items.length-1}>Next
         </button>

         <div className="cards-slider"> 
            <div className="cards-slider-wrapper">
              
              {/* {item.length !== 0 ? items.map(item =>(<Card key={item.id} item={item}/>)): "not ready"} */}
              {item.length !== 0 ? <Card item={item}/>: "not ready"}
            </div>
         </div>
      </div>
    );
  }
}
export default App;

{/* <ShowResults nasaimages = {showitems}/> */}