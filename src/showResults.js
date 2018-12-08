import React, { Component } from 'react';
import './App.css';
class ShowResults extends Component {
    render(){
        let src = this.props.item;
        return(
            <div>
                <img src alt="" height="100" width="100"></img>
            </div>
        );
    }
}

export default ShowResults;