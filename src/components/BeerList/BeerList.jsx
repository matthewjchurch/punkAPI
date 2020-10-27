import { bindElementToQueries } from '@testing-library/react';
import React, { useEffect } from 'react';
import Card from "./Card";
import styles from  "../../assets/styles/_BeerList.module.scss";

const BeerList = (props) => {
    const {beers} = props;

    const getBeers = (beer => {
        return beer ? <Card key={beer.name} beer={beer} />:
        null
    });
    
    return (
        <section>
            {beers.map(getBeers)}
        </section>
    )
}

export default BeerList
