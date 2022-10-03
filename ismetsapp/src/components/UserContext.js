import React from "react";

export const UserContext = React.createContext({username: "", authorized: false});

export const UserProvider = () => {

    const [user, setUser] = React.useState({username: "", authorized: false});

    const userLogin = (username) => {

        setUser((user) => ({
            username: username,
            authorized: true
        })
        )

    }

}