import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savedRecipes, setSavedRecipes } from '../../constants/data';
import { icons } from '../../constants/icons';

const
  RecipeScreen = () => {
    const [recipe, setRecipe] = useState(null);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
      const fetchRecipe = async () => {
        try {
          const recipeData = await AsyncStorage.getItem('recipe');
          if (recipeData !== null) {
            setRecipe(JSON.parse(recipeData));

            const savedRecipesData = await AsyncStorage.getItem('savedRecipes');
            if (savedRecipesData !== null) {
              const savedRecipesArray = JSON.parse(savedRecipesData);
              const isRecipeSaved = savedRecipesArray.some(savedRecipe => savedRecipe.title === JSON.parse(recipeData).title);
              setIsSaved(isRecipeSaved);
            }
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };

      fetchRecipe();
    }, []);

    if (!recipe) {
      return null;
    }

    const { title, user, image, rating, ingredients, steps, time, description, type } = recipe;

    const handleSave = async () => {
      try {
        if (!isSaved) {
          const newSavedRecipes = [...savedRecipes, recipe];
          await setSavedRecipes(newSavedRecipes);
          Alert.alert('Success', 'Recipe saved successfully');
          setIsSaved(true);
        } else {
          const updatedSavedRecipes = savedRecipes.filter(savedRecipe => savedRecipe.title !== recipe.title);
          await setSavedRecipes(updatedSavedRecipes);
          Alert.alert('Success', 'Recipe removed from saved recipes');
          setIsSaved(false);
        }
      } catch (error) {
        console.error('Error saving recipe:', error);
        Alert.alert('Error', 'Failed to save recipe');
      }
    };

    const imagem = () => {
      return type === undefined ? <Image source={image} className="w-72 h-56 rounded-xl relative" /> : <Image source={{ uri: image }} className="w-72 h-56 rounded-xl relative" />
    };

    return (
      <ScrollView className='p-4 bg-slate-900'>
        <View className="justify-center items-center mt-4">
          {imagem()}
        </View>
        <View className='flex flex-row justify-between items-center mt-4 mb-3 mx-3'>
          <TouchableOpacity onPress={handleSave} className="flex-row justify-between">
            <Image source={isSaved ? icons.saved : icons.save} tintColor={'#fff'} className="w-10 h-10" />
            <Text className="text-white font-bold text-lg mt-1 ml-2">Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} className="flex-row justify-between">
            <Image source={icons.share} tintColor={'#fff'} className="w-10 h-10" />
            <Text className="text-white font-bold text-lg mt-1 ml-2">Share</Text>
          </TouchableOpacity>
          <Text className="text-white">Rating: {rating}/5</Text>
        </View>
        <View className='mt-4 justify-center items-center'>
          <Text className='text-3xl font-extrabold text-white'>{title}</Text>
          <Text className="text-white mt-1">Made by: {user}</Text>
          <Text className="text-white mt-1">Cooking time: {time} minutes</Text>
        </View>

        <View>
          <Text className="text-white text-xl font-bold mt-6 ml-3">Description</Text>
          <Text className="text-white text-sm mt-2 ml-4 mr-4">{description}</Text>
        </View>

        <View className='mt-5'>
          <Text className='font-bold text-white text-xl ml-3 mb-2'>Ingredients:</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index}>
              <Text className="text-sm text-white ml-4">- {ingredient}</Text>
            </View>
          ))}
        </View>

        <View className='mt-5'>
          <Text className='font-bold text-white text-xl ml-3'>Steps:</Text>
          <Text className="text-white text-sm mt-2 ml-4 mr-4">{steps}</Text>
        </View>
        <View className="mt-8">
          <Text></Text>
        </View>
      </ScrollView>
    );
  };

export default RecipeScreen;