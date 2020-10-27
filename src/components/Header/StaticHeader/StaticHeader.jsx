import React from 'react';
import styles from "../../../assets/styles/_StaticHeader.module.scss";

const StaticHeader = (props) => {
    const { queryStr, setQueryStr, setBeers } = props
    return (
        <header>
            <h1>Punk API</h1>
        </header>
    )
}

export default StaticHeader
