import React from 'react'
import FilterItem from './FilterItem/FilterItem'

const FilterList = (props) => {
    const {queryStr, setQueryStr, setBeers} = props;
    const filters = {
        "ABV": {
            query: "abv_gt",
            range: 12,
            step: 1,
        },

        "IBU": {
            query: "ibu_gt",
            range: 100,
            step: 5,
        }
    }

    const getFilters = item => {
        return (
            <FilterItem 
                key={item}
                queryStr={queryStr}
                setQueryStr={setQueryStr}
                setBeers={setBeers} 
                item={item} 
                query={filters[item].query}
                range={filters[item].range}
                step={filters[item].step}
            />
        )
    }

    return (
        <div>
            {Object.keys(filters).map(getFilters)}
        </div>
    )
}

export default FilterList
