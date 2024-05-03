import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'
import { recipesImages } from '../../constants/recipesJS'
import { recipes, myRecipes, savedRecipes } from '../../constants/data';

const Profile = () => {
    const manuelRecipes = [recipes[0], recipes[2]];

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-44 h-44 rounded-full"/>
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-3">Manuel Augusto</Text> 
                </View>
                <View className="h-10"/>
                <View>
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-3">Recipes</Text>  
                </View>
                <FlatList
                    data={manuelRecipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            user={item.user}
                            image={item.image}
                            rating={item.rating}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile