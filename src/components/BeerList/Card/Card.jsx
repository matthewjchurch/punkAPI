import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import styles from "../../../assets/styles/_BeerList.module.scss";
import firebase, { firestore } from "../../../firebase";

const Card = (props) => {
    const {beer, user} = props;
    const [fav, setFav] = useState(false);

    const setFavouriteBeer = (e) => {
        e.stopPropagation();
        if (user) {
            setFav(!fav);
            firestore
                .collection("users")
                .doc(user.uid)
                .update({favourites: firebase.firestore.FieldValue.arrayUnion({...beer, user: user.uid})})
                .then(res => console.log(res));
        } else {
            alert("Please log in to add favourites");
        }
    }

    const isFavourite = () => {
        let fav = false;
        if(user){
            firestore
                .collection("users")
                .doc(user.uid)
                .get()
                .then((doc) => doc.data().favourites.forEach(favourite => {
                    if (beer.id === favourite.id) {
                        fav = true;
                    }
                }))
        }
        return fav
    }

    return (
        <article>
            <h3>{beer.name}</h3>
            <img src={beer.image_url} alt={beer.name}/>
            <p>{beer.tagline}</p>
            <section className={styles.details}>
                <p>{beer.abv}</p>
                <p>{beer.ibu}</p>
                <FontAwesomeIcon 
                    onClick={setFavouriteBeer} 
                    icon={isFavourite() ? ["fas", "heart"] : ["far", "heart"]}
                    className={styles.faHeart} />
            </section>
        </article>
    )
}

export default Card
