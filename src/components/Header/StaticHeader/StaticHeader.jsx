import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from "../../../assets/styles/_StaticHeader.module.scss";
import MyBeers from '../../MyBeers';
import  { Link } from "@reach/router";

const StaticHeader = (props) => {
    const { signInGoogle, signInGithub, signOut, user } = props
    
    const signInOut = user ?
        <span>
            <FontAwesomeIcon 
                onClick={signOut} 
                icon={["fa", "sign-out-alt"]} />
        </span> :
        <>
            <span>
                <FontAwesomeIcon 
                    onClick={signInGoogle} 
                    icon={["fab", "google"]} />
            </span>
            <span>
                <FontAwesomeIcon 
                    onClick={signInGithub} 
                    icon={["fab", "github"]} />
            </span>
        </>
        
    return (
        <header>
            <Link to="/">
                <h1>Punk API</h1>
            </Link>
            <section className={styles.links}>
                {signInOut}
                <Link to="/mybeers">
                    <span>
                        <FontAwesomeIcon icon={["fas", "beer"]} />
                    </span>
                </Link>
                {user ? <p>{`Welcome ${user.displayName.split(" ")[0]}`}</p> : <></>}
            </section>
        </header>
    )
}

export default StaticHeader
