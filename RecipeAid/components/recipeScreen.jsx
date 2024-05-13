import React from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const
  RecipeScreen = () => {
    const route = useRoute();
    const { title, user, image, rating, ingredients, steps, time } = route.params;
    console.log(route.params);

    return (
      <ScrollView className='p-4'>
        <View className='mt-4'>
          <Text className='text-lg'>{title}</Text>
          <Text>Made by: {user}</Text>
          <Text>Cooking time: {time} minutes</Text>
        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Ingredients:</Text>
          {ingredients}
        </View>

        <View className='mt-4'>
          <Text className='font-semibold'>Steps:</Text>
          {steps}
        </View>

        <View className='flex flex-row justify-between items-center mt-4'>
          <Button title="Save" onPress={() => { }} />
          <Button title="Share" onPress={() => { }} />
          <Button title="Edit" onPress={() => { }} />
          <Text>Rating: {rating}/5</Text>
        </View>
      </ScrollView>
    );
  };

export default RecipeScreen;