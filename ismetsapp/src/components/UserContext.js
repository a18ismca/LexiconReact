import React, {useState, createContext} from "react";

export const UserContext = createContext({username: "", authorized: false});

export const UserProvider = ({ children }) => {

    // user is the username of the "data" that gets stored in the context

    const [user, setUser] = useState({username: "", authorized: false});


    // Login updates the user data with a username parameter. authorized: true
    const userLogin = (username) => {

        setUser((user) => ({
            username: username,
            authorized: true,
            
        })

        );

    };

    const userLogout = () => {

        setUser((user) => ({
            username: "",
            authorized: false,
        }));
    
    };

    return (
        <UserContext.Provider value={{user, userLogin, userLogout}}>
            {children}
        </UserContext.Provider>
    )



}