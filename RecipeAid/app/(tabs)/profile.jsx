import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'
import { recipesImages } from '../../constants/recipesJS'

const Profile = () => {
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-44 h-44 rounded-full"/>
                    <Text className="text-4xl">Manuel Augusto</Text> 
                </View>
                <View className="h-10"/>
                <View>
                    <Text className="text-2xl">Posted Recipes</Text>  
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <Card title="Bacalhau à Brás" image={recipesImages.bacalhauBras} rating={4.5} category={["fish", "traditional"]}/>
                    <Card title="Arroz de Pato" image={recipesImages.arrozPato} rating={4.6} category={["traditional", "rice"]}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile