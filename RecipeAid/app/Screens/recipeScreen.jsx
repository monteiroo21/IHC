import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const
  RecipeScreen = () => {
    // console.log(route);
    // const { title, user, image, rating, ingredients, steps, time, description } = route.params;

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
      // Recupera os dados da receita do AsyncStorage quando o componente é montado
      const fetchRecipe = async () => {
        try {
          const recipeData = await AsyncStorage.getItem('recipe');
          if (recipeData !== null) {
            setRecipe(JSON.parse(recipeData));
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };

      fetchRecipe();
    }, []);

    if (!recipe) {
      return null; // Renderiza nada se não houver receita disponível
    }

    const { title, user, image, rating, ingredients, steps, time, description } = recipe;

    return (
      <ScrollView className='p-4'>
        <View>
          <Image source={image} className='w-full h-96 rounded-xl' />
        </View>


        <View className='mt-4'>
          <Text className='text-lg'>{title}</Text>
          <Text>Made by: {user}</Text>
          <Text>Cooking time: {time} minutes</Text>
        </View>

        <View>
          <Text>{description}</Text>

        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Ingredients:</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index}>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Steps:</Text>
          <Text>{steps}</Text>
        </View>

        <View className='flex flex-row justify-between items-center mt-4'>
          <Button title="Save" onPress={() => { }} />
          <Button title="Share" onPress={() => { }} />
          <Button title="Edit" onPress={() => { }} />
          <Text>Rating: {rating}</Text>
        </View>
      </ScrollView>
    );
  };

export default RecipeScreen;