import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView>
                <View className="justify-center items-center">
                    <Image source={image} resizeMode='contain' className="w-40 h-40 rounded-full" />
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-7 mt-3">{name}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserScreen