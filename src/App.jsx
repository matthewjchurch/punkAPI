import React, { useState, useEffect } from 'react';
import './App.css';
import BeerList from "./components/BeerList";
import Header from "./components/Header";

function App() {

  const [beers, setBeers] = useState([]);
  const [queryStr, setQueryStr] = useState("?");

  const getInitialData = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
    .then(res => res.json()
    .then(res => {
        setBeers(res);
        }));
    }

    const queryData = () => {
        fetch(`https://api.punkapi.com/v2/beers${queryStr}`)
        .then(res => res.json()
        .then(res => {
            setBeers(res);
            }));
    }

    useEffect(() => {
        getInitialData()
    }, []);

  return (
    <>
      <Header queryStr={queryStr}
              setQueryStr={setQueryStr} 
              setBeers={queryData}
              />
      <BeerList beers={beers} />
    </>
  );
}

export default App;
