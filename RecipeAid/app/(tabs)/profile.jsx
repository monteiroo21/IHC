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

const Profile = ({ navigation }) => {
    const firstsMyRecipes = recipes.filter(recipe => recipe.user === "Manuel Augusto").slice(0, 3);
    const firstsSavedRecipes = savedRecipes.slice(0, 3);

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={icons.persona} resizeMode='contain' className="w-40 h-40 rounded-full" />
                    <ButtonStandart
                        title="Edit Profile"
                        containerStyles="mt-3"
                        textStyles="text-white-500 font-bold text-sm"
                    />
                    <Text className="text-3xl text-white-500 font-extrabold text-center mb-7 mt-3">Manuel Augusto</Text>
                </View>

                <View>
                    <TouchableOpacity className="flex-row ml-3">
                        <Text className="text-2xl text-white-500 font-extrabold mb-3 ml-4 border-2 rounded-xl border-white-500 px-2">
                            Posted Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={firstsMyRecipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            user={item.user}
                            image={item.image}
                            rating={item.rating}
                            ingredients={item.ingredients}
                            steps={item.steps}
                            time={item.time}
                            description={item.description}
                            type={item.type}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <View className="mt-10">
                    <TouchableOpacity className="flex-row ml-3">
                        <Text className="text-2xl text-white-500 font-extrabold mb-3 ml-4 border-2 rounded-xl border-white-500 px-2">
                            Saved Recipes
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    className="mb-8"
                    data={firstsSavedRecipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            user={item.user}
                            image={item.image}
                            rating={item.rating}
                            ingredients={item.ingredients}
                            steps={item.steps}
                            time={item.time}
                            description={item.description}
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