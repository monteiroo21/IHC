import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
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
        <View className='mt-4'>
          <Text className='text-lg'>{title}</Text>
          <Text>Made by: Manuel Augusto</Text>
          <Text>Cooking time: 60 minutes</Text>
        </View>

        <View>
          <Text>{description}</Text>
        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Ingredients:</Text>
          {/* List your ingredients here */}
        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Steps:</Text>
          {/* List your steps here */}
        </View>

        <View className='flex flex-row justify-between items-center mt-4'>
          <Button title="Save" onPress={() => { }} />
          <Button title="Share" onPress={() => { }} />
          <Button title="Edit" onPress={() => { }} />
          <Text>Rating: 3/5</Text>
        </View>
      </ScrollView>
    );
  };

export default RecipeScreen;