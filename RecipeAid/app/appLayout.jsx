import { View, StatusBar } from 'react-native'
import React from 'react'

const AppLayout = () => {
    return (
        <View>
            <StatusBar hidden={true} />
            <Text>AppLayout</Text>
        </View>
    )
}

export default AppLayout