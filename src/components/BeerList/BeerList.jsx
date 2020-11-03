import React from 'react';
import Card from "./Card";
import styles from  "../../assets/styles/_BeerList.module.scss";

const BeerList = (props) => {
    const {beers, user} = props;

    const getBeers = (beer => {
        return beer ? 
            <Card 
                user={user} 
                key={beer.name} 
                beer={beer} /> :
        null
    });
    
    return (
        <section className={styles.cardsGrid}>
            {beers.map(getBeers)}
        </section>
    )
}

export default BeerList
