import React, {useContext} from "react";
import {Navigation} from "./Navigation";
import { UserContext } from "./UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {

    const {user} = useContext(UserContext);

    return(
        <>
        <div className="container">
            <Navigation/>
            <h4>Hello and welcome, {user.username}</h4>
            
        </div>
        </>
    )
}