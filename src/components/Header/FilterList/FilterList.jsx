import React from 'react'
import FilterItem from './FilterItem/FilterItem'

const FilterList = (props) => {
    const {queryStr, setQueryStr, setBeers} = props;
    const filters = {
        "ABV": {
            query: "abv_gt",
            range: 12,
        },

        "IBU": {
            query: "ibu_gt",
            range: 100,
        }
    }

    const getFilters = item => {
        return <FilterItem queryStr={queryStr}
                        setQueryStr={setQueryStr}
                        setBeers={setBeers} 
                        item={item} 
                        query={filters[item].query}
                        range={filters[item].range} />
    }

    
    return (
        <div>
            {Object.keys(filters).map(getFilters)}
        </div>
    )
}

export default FilterList