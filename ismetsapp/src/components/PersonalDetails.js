import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Navigation} from './Navigation';
import React from "react";

export const PersonalDetails = () => {

    return(
        <div className='container'>
            <Navigation/>
        <h2>Your personal details</h2>

        <Link to="/list">Return to list</Link>
        </div>
    )
}
