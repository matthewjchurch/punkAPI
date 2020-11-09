import React from 'react'
import FilterList from '../FilterList/FilterList';

const SearchBar = (props) => {
    const {queryStr, setQueryStr, setBeers} = props;

    const searchHandler = e => {
        let allowForSpaces = e.target.value.replace(" ", "_")
        e.target.value === "" ?
        setBeers([]):
        queryStr.match(/beer_name/) ?
        setQueryStr(queryStr.replace(/beer_name=\w+&/, `beer_name=${allowForSpaces}&`)) :
        setQueryStr(`${queryStr}beer_name=${allowForSpaces}&`)
        setBeers(queryStr);
    }

    const backspaceHandler = (e) => {
        if (e.keyCode === 8) {
            searchHandler();
        }
    }
    return (
        <div>
            <label htmlFor="name">Know what you're looking for?</label>
            <input 
                onChange={searchHandler} 
                onKeydown={backspaceHandler} 
                type="text"
            />
        </div>
    )
}

export default SearchBar
