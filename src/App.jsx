import React, { useState, useEffect } from 'react';
import './App.css';
import BeerList from "./components/BeerList";
import Header from "./components/Header";
import firebase, { firestore, githubProvider, googleProvider } from "./firebase";
import library from "./data/fa-library";
import Routes from './Routes/Routes';

function App() {

  const [beers, setBeers] = useState([]);
  const [queryStr, setQueryStr] = useState("?");
  const [user, setUser] = useState(null);

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  const getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        setUser(user);
      }
    })
  }

  const signInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        setUser(result.user)
      })
  }

  const signInGithub = () => {
    firebase.auth().signInWithRedirect(githubProvider);
  }

  const signOut = () => {
    firebase.auth().signOut();
  }

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
        getInitialData();
        getUser();
    }, []);

    useEffect(() => {
        queryData()
    }, [queryStr]);

  return (
    <>
      <Header 
        queryStr={queryStr}
        setQueryStr={setQueryStr} 
        setBeers={queryData}
        beers={beers}
        signInGoogle={signInGoogle}
        signInGithub={signInGithub}
        signOut={signOut}
        user={user} />
      <Routes 
        beers={beers} 
        user={user} />
    </>
  );
}

export default App;
