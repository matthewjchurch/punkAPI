import React, { useState } from 'react'

const FilterItem = (props) => {
    const {queryStr, setQueryStr, setBeers, item, query, range} = props;

    const [value, setValue] = useState(0)

    const slideHandler = e => {
        setValue(e.target.value);
        let re = new RegExp(`${query}=\\w+&`);
        document.getElementById(`${item}Slide}`).value = e.target.value;
        queryStr.match(query) ?
        setQueryStr(queryStr.replace(re, `${query}=${e.target.value}&`)) :
        setQueryStr(`${queryStr}${query}=${e.target.value}&`);
        setBeers(queryStr);
    }

    return (
        <>
            <label htmlFor={item}>{`Min ${item}`}</label>
            <input onChange={slideHandler} type={"range"} min="0" max={range} value={value} />
            <input id={`${item}Slide}`} type="text"/>
        </>
    )
}

export default FilterItem
