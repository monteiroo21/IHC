import React from 'react';
import { View, Text, ScrollView, Button, TextInput } from 'react-native';

const
  RecipeScreen = () => {
    return (
      <ScrollView className='p-4'>
        <View className='mt-4'>
          <Text className='text-lg'>Bacalhau à Brás</Text>
          <Text>Made by: Manuel Augusto</Text>
          <Text>Cooking time: 60 minutes</Text>
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