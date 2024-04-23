import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <Text className="text-3xl">Olá</Text>
        </SafeAreaView>
    )
}

export default Profile