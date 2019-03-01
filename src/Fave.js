import React, { Component } from 'react';
import './App.css';

class Fave extends Component{
    
    addItem(){
        this.setState({todoList: [...this.state.todoList, this.state.todoItem]})
    } 
    render(){
        return(
            <div>
                <button onClick={this.props.createFave.bind()}>Make Fave</button>
                <button onClick={this.props.deleteFave.bind()}>Del Fave</button>
            </div>
        )
    }    
}

export default Fave;