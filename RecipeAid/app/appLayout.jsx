import { View, StatusBar } from 'react-native'
import React from 'react'
import GlobalProvider from '../context/GlobalProvider'

const AppLayout = () => {
    return (
        <GlobalProvider>
            <View>
                <Text>AppLayout</Text>
            </View>
        </GlobalProvider>
    )
}

export default AppLayout