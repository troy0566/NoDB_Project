import React, { Component } from 'react';
import './ShowResults.css';
class ShowResults extends Component {
    render(){
       var displayimages = this.props.nasaimages
       .filter(displayimages => !displayimages.endsWith("srt"))

        return(
            <div className="column">
                <ul>
                    {displayimages.map((displayimage, index) => <li key={index}><img src= {displayimage}  className='img-responsive' /></li>)}        
                </ul>
            </div>

        );
    }
}

export default ShowResults;