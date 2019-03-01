import React, { Component } from 'react';
import './ShowResults.css';
class ShowResults extends Component {
    constructor(props){
        super(props)
        this.state = {
        localfavs: []
        }
    }
    render(){
     
        var displayimages = this.props.favs.map(fav => {return fav.links[0].href; })
        .filter(displayimages => !displayimages.endsWith("srt"))

        return(
            <div className="column">
                <header>
                    {displayimages.map((displayimage, index) => <div key={index}><img src= {displayimage} /></div>)}        
                </header>
            </div>

        );
    }
}

export default ShowResults;