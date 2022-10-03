import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import React, {useState} from 'react';

export const Login = () => {

const [username, setUsername] = useState();

const usernameOnChange = (e) => {
    setUsername(e.target.value);
}



    return(

        <div className='container'>
            <header>
                <h4>Welcome to login page!</h4>
            </header>
            <form>
            <label>
                Username:
            </label>

            <input 
                type={text} 
                placeholder='Enter here!'
                onChange={usernameOnChange}     
            />

            <div>
                <Link to="home"><button type='submit'>Login</button></Link>
            </div>
            </form>
            

        </div>

    )

}