import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [globalArray, setGlobalArray] = useState([]);

    return (
        <GlobalContext.Provider value={{ globalArray, setGlobalArray }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider