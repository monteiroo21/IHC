import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Pressable, Modal } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import { icons } from '../constants/icons.js';
import { useIngredients } from './IngredientsContext.jsx';

function Vegetables() {
  const { selectedIngredients, handleSelectIngredient } = useIngredients();
  const [modalVisible, setModalVisible] = useState(false);
  const veg = vegetables;

  return (
    <SafeAreaView className="h-full bg-slate-900">
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
                }}
      >
        <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}}>
          <View className="rounded-xl" style={{
                  backgroundColor: 'white',
                  width: 304,
                  height: 340}}>
            <Pressable 
              className="ml-72"
              onPress={() => setModalVisible(false)}
            >
              <Image source={icons.x} tintColor={"#000"} className="h-3 w-3 mt-2 "></Image>
            </Pressable>
              <Text>Vegan</Text>
              <Text>Time</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <View className="flex-row justify-between px-5 mt-5">
                  <Text className="text-2xl font-extrabold ml-2 text-teal-700">Filter</Text>
                </View>
              </Pressable>
          </View>
        </View>
      </Modal>
        <ScrollView>
          <FlatList
            data={veg}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectIngredient(item.title)}>
                <IngredientsCard
                  title={item.title}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
                />
            <Text className="text-xl mt-2 ml-4 text-white">List of Ingredients: </Text>
            {selectedIngredients.map((ingredient, index) => (
              <View key={index} className="flex-row mt-2 border-2 border-gray-200 h-8 w-28 ml-5 rounded-lg align-middle">
                <Text className="ml-2 mt-1 mr-4 text-white">{ingredient}</Text>
                  <TouchableOpacity onPress={() => handleSelectIngredient(ingredient)}>
                      <Image source={icons.x} tintColor={"#fff"} resizeMode='contain' className="h-3 w-3 mt-2 ml-3" />
                  </TouchableOpacity>
              </View>
            ))}

            <Pressable
                onPress={() => setModalVisible(true)}>
                <View className="rounded-xl border-2 border-white p-5 mt-4">
                    <Text className="text-md text-white">
                        Filter
                    </Text>
                </View>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
  );
}

export default Vegetables;