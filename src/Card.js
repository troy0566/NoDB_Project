import React from 'react';
//import PropTypes from 'prop-types';

const Card = ({item}) => {
    const {id, links, data} = item;
    const {href, rel} = links[0];
    const {center, keywords, nasa_id, date_created, media_type, title} = data[0];

    return (
        <div id={`card-${id}`} className="card">
            <img src={href} alt={rel} />
            <div className="details">
                <span className="index">{id+1}</span>
                <p className="mediatype">
                    {media_type}<br />
                    {date_created}
                </p>
                <ul className="information">
                    <li className="center">{center} <span>center</span></li>
                    <li className="keywords">{keywords} <span>keywords</span></li>
                    <li className="NASAid">{nasa_id} <span>NASA Id</span></li>
                    <li className="Title">{title} <span>title</span></li>
                </ul>
            </div>
        </div>
    )
}

//Card.propTypes = {
//    property: PropTypes.object.isRequired
//}

export default Card;