import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { recipes } from '../../constants/data';
import CardStandart from '../../components/CardStandart';

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData !== null) {
          setUser(JSON.parse(userData));

          const savedUserData = await AsyncStorage.getItem('savedRecipes');
          if (savedUserData !== null) {
            const savedUserArray = JSON.parse(savedUserData);
            const isUserSaved = savedUserArray.some(savedUser => savedUser.name === JSON.parse(userData).name);
            setIsSaved(isUserSaved);
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return null;
  }

  const { name, image } = user;

  const recipesOfUser = recipes.filter(recipe => recipe.user === name);
  console.log(recipesOfUser);

  return (
    <SafeAreaView className="h-full bg-slate-900">
      <ScrollView>
        <View className="justify-center items-center mt-4">
          <Image source={image} resizeMode='cover' className="w-40 h-40 rounded-full" />
          <Text className="text-4xl text-teal-600 font-extrabold text-center mb-7 mt-4">{name}</Text>
        </View>

        <View className="mt-4 ml-8 mb-4">
          <Text className="text-teal-600 text-2xl font-bold">Recipes Published</Text>
        </View>
        <FlatList
          data={recipesOfUser}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <CardStandart
              title={item.title}
              user={item.user}
              image={item.image}
              rating={item.rating}
              ingredients={item.ingredients}
              steps={item.steps}
              time={item.time}
              description={item.description}
              type={item.type}
              cardStyle={{ width: 200, height: 300, marginRight: 10 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserScreen