import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'

const Profile = () => {
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-40 h-40" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile