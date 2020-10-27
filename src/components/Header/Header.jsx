import React from 'react';
import StaticHeader from "./StaticHeader";
import SearchBar from "./SearchBar";
import FilterList  from "./FilterList";
import styles from "./_Header.module.scss";

const Header = (props) => {
    const {queryStr, setQueryStr, setBeers} = props;
    

    return (
        <>
        <StaticHeader queryStr={queryStr}
                        setQueryStr={setQueryStr} 
                        setBeers={setBeers} />
        <section className={styles.filters}>
            <SearchBar queryStr={queryStr}
                        setQueryStr={setQueryStr} 
                        setBeers={setBeers} />
            <FilterList queryStr={queryStr}
                        setQueryStr={setQueryStr} 
                        setBeers={setBeers} />
        </section>
        </>
    )
}

export default Header
