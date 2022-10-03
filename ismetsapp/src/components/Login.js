import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import React, {useState, useContext} from 'react';
import { UserContext } from './UserContext';

export const Login = () => {

const { userLogin } = useContext(UserContext);

const [name, setUsername] = useState();

const usernameOnChange = (e) => {
    setUsername(e.target.value);
}



    return(

        <div className='container'>
            <header>
                <h4>Welcome to login page!</h4>
            </header>
            <label>
                Username:
            </label>

            <input 
                type='text' 
                placeholder='Enter here!'
                onChange={usernameOnChange}     
            />

            <div>
                <Link to="home"><button onClick={() => userLogin(name)}>Login</button></Link>
            </div>
            

        </div>

    )

}