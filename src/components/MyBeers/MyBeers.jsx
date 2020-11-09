import React, { useEffect, useState } from 'react';
import Card from "../BeerList/Card";
import { firestore } from "../../firebase";
import styles from "../../assets/styles/_BeerList.module.scss";


const MyBeers = (props) => {
    const { user } = props;
    const [favourites, setFavourites] = useState([]);

    const getBeers = () => {
        return firestore
            .collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => setFavourites(doc.data().favourites))
            .catch((err) => console.error(err));
    };

    const mapBeers = (beer => {
        return <Card 
                    user={user} 
                    key={beer.name} 
                    beer={beer} />
    });

    useEffect(() => {
        return user ?
        getBeers():
        null;
    }, [user])
    
    return (
        user ? 
        <>
            <h1>{`Welcome to your beer list, ${user.displayName.split(" ")[0]}`}</h1> 
            <section className={styles.cardsGrid}>
                {favourites.map(mapBeers)}
            </section>
        </>:
        null
    )
}

export default MyBeers
