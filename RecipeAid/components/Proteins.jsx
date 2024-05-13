import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Modal, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ingredients, vegetables, proteins, broccoli } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import { icons } from '../constants/icons.js';
import { useIngredients } from './IngredientsContext.jsx';
import CardStandart from './CardStandart.jsx';

function Proteins() {
  const { selectedIngredients, handleSelectIngredient } = useIngredients();
  const [modalVisible, setModalVisible] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [maxTime, setMaxTime] = useState('');  // State to store the maximum time input
  const [search, setSearch] = useState(false);
  const pro = proteins;
  const bro = broccoli;

  const handlePress = () => {
    router.push('../Screens/recipeScreen');
  };

  const handleMaxTimeChange = (text) => {
    setMaxTime(text);  // Update the state with the new input
  };

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
                  width: 210,
                  height: 280}}>
            <Pressable 
              className="ml-48"
              onPress={() => setModalVisible(false)}
            >
              <Image source={icons.x} tintColor={"#000"} className="h-3 w-3 mt-2 "></Image>
            </Pressable>
            <View StyleSheet={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setIsVegan(!isVegan)}>
                <Text className="text-lg font-bold ml-4 text-teal-700 mb-2 mt-2">Vegan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsVegan(!isVegan)}>
                <View style={{ backgroundColor: '#fff', width: 32, height: 32, justifyContent: 'center', alignItems: 'center', marginLeft: 14 }} className="border-2 border-gray-400 rounded-lg ml-2">
                    {isVegan ? (
                        <Image source={icons.check} style={{ width: 14, height: 14 }} resizeMode='contain' />
                    ) : null}
                </View>
              </TouchableOpacity>
            </View>
            <View StyleSheet={styles.buttonContainer}>
              <Text className="text-lg font-bold ml-4 text-teal-700 mb-2 mt-2">Tempo máximo (min)</Text>
              <TextInput
                  style={{ backgroundColor: '#fff', width: 80, height: 40, marginLeft: 14, paddingLeft: 10 }}
                  placeholder="Tempo"
                  keyboardType="numeric"
                  className="border-2 border-gray-400 rounded-lg ml-2"
                  onChangeText={handleMaxTimeChange}
                  value={maxTime}
              />
              <Pressable onPress={() => setModalVisible(false)}>
                <View className="flex-row justify-center px-5 mt-14">
                  <Text className="text-2xl font-extrabold ml-2 text-teal-700">Filter</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {search && (
        <View className="bg-slate-900">
            <TouchableOpacity onPress={() => setSearch(false)}>
              <Image source={icons.backArrow} tintColor={"#fff"} className="w-8 h-8 ml-4"></Image>
            </TouchableOpacity>
            <FlatList
                className="mt-6 mb-72"
                data={bro}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardStandart
                        title={item.title}
                        user={item.user}
                        image={item.image}
                        rating={item.rating}
                        type={item.type}
                        ingredients={item.ingredients}
                        steps={item.steps}
                        time={item.time}
                        description={item.description}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      )}
      {!search && (
        <ScrollView>
          <FlatList
            data={pro}
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

<           View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text className="text-2xl text-white font-extrabold mt-4 ml-2 border-2 border-white rounded-xl px-2">
                  Filter
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setSearch(true)}>
                <Text className="text-2xl text-white font-extrabold mt-4 ml-2 border-2 border-white rounded-xl px-2">
                  Search
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {isVegan && <Text className="text-white ml-4">- Vegan</Text>}
              {maxTime !== '' && <Text className="text-white ml-4">- Maximum Time: {maxTime} min</Text>}
            </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});

export default Proteins;