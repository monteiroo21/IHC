import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'

const Profile = () => {
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-60 h-60 rounded-full"/>
                    <Text className="text-4xl">Manuel Augusto</Text> 
                </View>
                <View className="h-10"/>
                <View>
                    <Text className="text-2xl">Posted Recipes</Text>  
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Card
                        title="Bacalhau à Brás"
                        imageUrl="https://casacaroba.com/wp-content/uploads/2023/06/bacalhau-a-bras-scaled.jpg"
                    />
                    <Card
                        title="Porco Grelhado"
                        imageUrl="https://www.apir.org.pt/wp-content/uploads/2020/01/lombinho-600x600.jpg"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile