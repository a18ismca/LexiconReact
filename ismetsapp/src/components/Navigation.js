import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {

    return(

        <div>
            <nav className="nav">
                <Link to="/"><p>Home</p></Link>
                <Link to="/add"><p>Add person</p></Link>
                <Link to="/list"><p>List of people</p></Link>
            </nav>
        </div>

    )

}

export default Navigation;