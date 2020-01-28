import React from 'react';
// import { createContext } from 'istanbul-lib-report';

const UserContext = React.createContext(['shyam', 'ram']);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer } 