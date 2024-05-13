import React from 'react';
import { View, Text, ScrollView, Button, TextInput, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { recipes } from '../../constants/data';
import NavBar from '../../components/NavBar';
import TabsLayout from '../(tabs)/_layout';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { recipesImages } from '../../constants/recipesJS';

const
  RecipeScreen = () => {
    

    return (
      <>
      <TabsLayout />
        <ScrollView className='p-4 bg-slate-900'>
          <View style={styles.buttonContainer}>
            <View>
              <View className='mt-4'>
                <Text className='text-lg font-bold text-white'>Bacalhau à Brás</Text>
                <Text className="text-white">Made by: Manuel Augusto</Text>
                <Text className="text-white">Cooking time: 60 minutes</Text>
              </View>

              <View className='mt-4'>
                <Text className='font-semibold text-white'>Ingredients:</Text>
                  <Text className="text-white">
                    Codfish
                  </Text>
                  <Text className="text-white">
                    Potatoes
                  </Text>
                  <Text className="text-white">
                    Eggs
                  </Text>
                  <Text className="text-white">
                    Olive oil
                  </Text>
                  <Text className="text-white">
                    Parsley
                  </Text>
              </View>
            </View>

            <Image source={recipesImages.bacalhauBras} className="w-32 h-48 mt-6 rounded-xl"></Image>
          </View>

          <View className='mt-4 ml-3'>
            <Text className='font-semibold text-white'>Steps:</Text>
              <Text className="text-white">1. Prepare the Codfish: Rinse it under cold water to remove excess salt. Place the codfish in a pot of cold water and bring it to a gentle boil. Let it simmer for about 10-15 minutes until it's cooked through.
              </Text>
              <Text className="text-white">2. Prepare the Potatoes: Peel the potatoes and cut them into thin matchstick-like strips or grate them using a grater. Rinse the grated potatoes under cold water to remove excess starch. 
              </Text>
              <Text className="text-white">3. Cooking: In a large frying pan, heat olive oil over medium heat. Add the shredded codfish and sauté for a few minutes until it starts to brown slightly. Add the grated potatoes to the pan and continue cooking. 
              </Text>
              <Text className="text-white">4. Prepare the Eggs: In a separate bowl, beat the eggs with a pinch of salt and pepper. Pour the beaten eggs over the cooked codfish and potatoes in the frying pan. 
              </Text>
              <Text className="text-white">5. Final Touches: Stir the mixture gently, allowing the eggs to cook and coat the codfish and potatoes evenly. Once the eggs are cooked, remove the pan from the heat.
              </Text>
          </View>

          <View className='flex flex-row justify-between items-center mt-4 mb-8'>
            <Button title="Save" onPress={() => { }} />
            <Button title="Share" onPress={() => { }} />
            <Button title="Edit" onPress={() => { }} />
            <Text className="text-white">Rating: 4.2/5</Text>
          </View>

        </ScrollView>
      </>
    );
  };

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});

export default RecipeScreen;