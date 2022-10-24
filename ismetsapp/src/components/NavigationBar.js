import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavigationBar = () => {

    // This navigation bar is used as a layout for this app.

    const { user } = useContext(UserContext);

    const { userLogout } = useContext(UserContext);

    return(

            <nav className="navbar navbar-expand-sm navbar-light bg-light">

                <div className="container-fluid">

                    <p>Logged in as {user.username}</p>

                    <Link to="/home"><p>Home</p></Link>

                    <Link to="/add"><p>Add person</p></Link>

                    <Link to="/list"><p>List of people</p></Link>

                    <Link to="/"><p onClick={() => userLogout()}>Logout</p></Link>

                </div>

            </nav>

    )

}

