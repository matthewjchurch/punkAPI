import React from "react";
import { Router } from "@reach/router";
import PrivateRoutes from "./PrivateRoutes";
import BeerList from "../components/BeerList"
import MyBeers from "../components/MyBeers";

const Routes = (props) => {
    const { user, beers } = props;
    return (
        <Router>
            <BeerList 
                user={user} 
                beers={beers} 
                path="/" />
            <PrivateRoutes 
                user={user} 
                path="/" >
                    
                <MyBeers 
                    user={user} 
                    path="/mybeers" />
            </PrivateRoutes>
        </Router>
    );
};

export default Routes;
