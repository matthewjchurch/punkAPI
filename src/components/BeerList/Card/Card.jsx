import React from 'react';

const Card = (props) => {
    const {beer} = props;
    return (
        <article>
            <h3>{beer.name}</h3>
            <img src={beer.image_url} alt={beer.name}/>
            <p>{beer.tagline}</p>
            <p>{beer.abv}</p>
            <p>{beer.ibu}</p>
        </article>
    )
}

export default Card
