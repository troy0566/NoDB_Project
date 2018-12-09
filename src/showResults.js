import React, { Component } from 'react';
import './App.css';
class ShowResults extends Component {
    render(){
       var displayimages = this.props.nasaimages
       .filter(displayimages => !displayimages.endsWith("srt"))

        return(
            <div>
                <ul>
                {displayimages.map((displayimage, index) => <li key={index}><img src= {displayimage}  className='img-responsive' /></li>)}        
                </ul>
            </div>
        );
    }
}

export default ShowResults;