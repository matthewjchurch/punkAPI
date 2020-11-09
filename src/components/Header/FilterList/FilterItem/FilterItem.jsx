import React, { useState, useEffect } from 'react'
import styles from "../../../../assets/styles/_FilterItem.module.scss";

const FilterItem = (props) => {
    const {queryStr, setQueryStr, setBeers, item, query, range, step} = props;

    const [value, setValue] = useState(0)

    const slideHandler = e => {
        setValue(e.target.value);
    }

    useEffect(() => {
        console.log(value);
        let re = new RegExp(`${query}=\\w+&`);
        document.getElementById(`${item}Slide}`).value = value;
        queryStr.match(query) ?
        setQueryStr(queryStr.replace(re, `${query}=${value}&`)) :
        setQueryStr(`${queryStr}${query}=${value}&`);
        setBeers(queryStr);
    }, [value])

    return (
        <div className={styles.slideContainer}>
            <label htmlFor={item}>{`Min ${item}`}</label>
            <input 
                className={styles.slide} 
                onChange={slideHandler} 
                type={"range"} 
                min="0" 
                max={range} 
                value={value} 
                step={step} 
            />
            <input 
                className={styles.output} 
                id={`${item}Slide}`} 
                type="text"
            />
        </div>
    )
}

export default FilterItem
