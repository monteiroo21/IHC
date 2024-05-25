import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { icons } from '../../constants/icons'
import Card from '../../components/Card'
import { recipesImages } from '../../constants/recipesJS'
import { recipes, myRecipes, savedRecipes, getRecipes } from '../../constants/data';
import ButtonStandart from '../../components/ButtonStandart'
import { router } from 'expo-router';
import RecipeScreen from '../../components/recipeScreen'
import NavBar from '../../components/NavBar'
import TabsLayout from '../(tabs)/_layout'

const handleMenuItemClick = (path) => {
    router.push(path);
}

const Recipes = ({ navigation }) => {
    const firstsMyRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto").slice(0, 3);
    const firstsSavedRecipes = savedRecipes.slice(0, 3);

    return (
        <>
        <NavBar />
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-40 h-40 rounded-full" />
                    <ButtonStandart
                        title="Edit Profile"
                        containerStyles="mt-3"
                        textStyles="text-white font-bold text-sm"
                    />
                    <Text className="text-3xl text-white font-extrabold text-center mb-7 mt-3">Manuel Augusto</Text>
                </View>

                <View>
                    <TouchableOpacity className="flex-row ml-20">
                        <Text className="text-2xl text-white font-extrabold mb-3 ml-4 border-2 rounded-xl border-white px-2" onPress={() => handleMenuItemClick('/recipes')}>
                            View My Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default Recipes