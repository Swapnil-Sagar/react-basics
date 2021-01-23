import React from "react";

const UserContext = React.createContext("Ocean"); //Ocean is he default value

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
