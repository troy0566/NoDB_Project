import React, { Component } from 'react';
import './App.css';

class PrevNext extends Component{
    
    addItem(){
        this.setState({todoList: [...this.state.todoList, this.state.todoItem]})
    } 
    render(){
        return(
            <div>
                <button onClick={this.props.handlePrev.bind()}>Back</button>
                <button onClick={this.props.handleNext.bind()}>Forward</button>
            </div>
        )
    }    
}

export default PrevNext;