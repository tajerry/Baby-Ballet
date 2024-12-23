import {createContext, useState} from "react";


const UserContext = createContext({
    contextUser: {
        name: "",
        email: "",
        isAuth: false,
    },
    setUser: () => {},
});
function UserContextProvider({children}){
    const [contextUser, setUser] = useState({
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
            contextUser,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, UserContextProvider};
