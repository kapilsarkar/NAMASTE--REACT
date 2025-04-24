import { createContext } from "react";

const UserContext = createContext({
    loggedInUser :"DefaultUser",
});

export default UserContext;