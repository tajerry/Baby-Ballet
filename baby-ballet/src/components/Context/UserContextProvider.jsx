import {createContext, useState} from "react";


const UserContext = createContext({
    user: {
        name: "",
        email: "",
        isAuth: false,
    },
    setUser: () => {},
});
function UserContextProvider({children}){
    const [user, setUser] = useState({
        firstName: "",
        lastName: '',
        phone: 0,
        email: "",
        password: '',
        isAuth: false,
    });
    return(
        <UserContext.Provider
        value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserContextProvider};
