import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import React from "react";

export const PersonalDetails = () => {

    return(
        <div className='container'>
            <NavigationBar/>
        <h2>Your personal details</h2>

        <Link to="/list">Return to list</Link>
        </div>
    )
}
