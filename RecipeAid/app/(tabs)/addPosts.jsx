import { View, Text, ScrollView, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'
import { recipesImages } from '../../constants/recipesJS'
import { recipes, myRecipes, savedRecipes } from '../../constants/data';
import { router } from 'expo-router';
import CardStandart from '../../components/CardStandart'

const addPosts = () => {
    const lastMyRecipes = myRecipes.slice(-3);

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View>
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-3">Posted Recipes</Text>
                </View>

                <View className="flex items-center">
                    <View className="flex-row justify-between px-4">
                        {lastMyRecipes.map((item, index) => (
                            <CardStandart
                                key={index}
                                title={item.title}
                                user={item.user}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </View>
                </View>

                <View className="h-10" />
                <View className="justify-center items-center">
                    <TouchableOpacity onPress={() => router.push('/profile')}>
                        <Image
                            source={icons.add}
                            resizeMode='contain'
                            style={{ width: 120, height: 120, borderRadius: 18 }}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default addPosts