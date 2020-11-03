import React, { useEffect } from 'react';
import { navigate } from "@reach/router"
import firebase from  "../../firebase";

const PrivateRoutes = (props) => {
    const { children, user } = props;
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user) {
                alert('You must be logged in to view this page. Click the Google button to sign in.');
                navigate("/");
            }
        });
    });
        
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoutes
