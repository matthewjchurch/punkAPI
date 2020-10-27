import React from 'react'
import FilterList from '../FilterList/FilterList';

const SearchBar = (props) => {
    const {queryStr, setQueryStr, setBeers} = props;
    const searchHandler = e => {
        e.target.value === "" ?
        setBeers([]):
        queryStr.match(/beer_name/) ?
        setQueryStr(queryStr.replace(/beer_name=\w+&/, `beer_name=${e.target.value}&`)) :
        setQueryStr(`${queryStr}beer_name=${e.target.value}&`)
        setBeers(queryStr);
    }
    return (
        <div>
            <label htmlFor="name">Know what you're looking for?</label>
            <input onChange={searchHandler} type="text"/>
        </div>
    )
}

export default SearchBar
