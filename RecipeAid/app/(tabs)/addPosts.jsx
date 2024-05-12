import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Modal, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants/icons'
import CardStandart from '../../components/CardStandart'
import { myRecipes, recipes } from '../../constants/data';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';

const addButton = ({ icon, color, name, buttonStyle }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' tintColor={color} className={`${buttonStyle}`} />
            <Text className="text-lg" style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const addButtonImage = ({ icon, color, name, buttonStyle, imageUri }) => {
    return (
        <View className="items-center justify-center gap-2">
            {imageUri ? (
                <View className="w-72 h-36 border-4 border-gray-400 rounded-lg">
                    <Image source={{ uri: imageUri }} resizeMode='cover' className="w-full h-full" />
                </View>

            ) : (
                <View className="justify-center items-center">
                    <Image source={icon} resizeMode='contain' tintColor={color} className={`${buttonStyle}`} />
                    <Text className="text-lg" style={{ color: color }}>
                        {name}
                    </Text>
                </View>
            )}
        </View>
    )
}

const addPosts = () => {
    const myLastRecipes = myRecipes.slice(-2);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTypeOfMeals, setSelectedTypeOfMeals] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const typeOfMealsAndCuisine = [
        { key: 'breakfast', value: 'Breakfast' },
        { key: 'main dish', value: 'Main Dish' },
        { key: 'snack', value: 'Snack' },
        { key: 'dessert', value: 'Dessert' },
        { key: 'appetizer', value: 'Appetizer' },
        { key: 'Italian', value: 'Italian' },
        { key: 'Mexican', value: 'Mexican' },
        { key: 'Chinese', value: 'Chinese' },
        { key: 'Japanese', value: 'Japanese' },
    ];

    const [formRecipe, setFormRecipe] = useState({
        user: "Manuel Augusto",
        title: "",
        image: "",
        description: "",
        ingredients: [],
        rating: 0,
        category: [],
        vegan: false,
        time: 0,
        rating: 0,
    });

    const openPicker = async (selectType) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: selectType === 'image' ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.Videos,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0]["uri"]);
            setFormRecipe({ ...formRecipe, image: result.assets[0]["uri"] });
        }
    }

    console.log(formRecipe);

    // console.log(selectedItems);

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
                <StatusBar backgroundColor='#fff' />
                <ScrollView className="h-full bg-white">
                    <View className="flex-1 justify-center items-center h-full bg-white">
                        <View className="w-full relative h-full">
                            <Pressable onPress={() => setModalVisible(false)}>
                                <View className="flex-row justify-between px-5 mt-5">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700">Create a new Recipe</Text>
                                    {addButton({
                                        icon: icons.x,
                                        color: '#000',
                                        buttonStyle: 'w-8 h-8'
                                    })}
                                </View>
                            </Pressable>
                            <View>
                                <View>
                                    <TouchableOpacity onPress={() => openPicker('image')}>
                                        <View className="flex items-center justify-center">
                                            <View key={selectedImage} className="w-72 h-36 border-4 border-gray-400 rounded-lg justify-center items-center">
                                                {addButtonImage({
                                                    icon: icons.post,
                                                    color: '#000',
                                                    name: 'Add a photo',
                                                    buttonStyle: 'w-16 h-16',
                                                    imageUri: selectedImage
                                                })}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View className="mt-6 justify-center items-center">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700 mb-2">Name of recipe</Text>
                                    <View className='flex flex-row items-center space-x-4 w-80 h-12 px-4 bg-black-100 rounded-2xl border-4 border-gray-400 focus:border-secondary'>
                                        <TextInput
                                            className='text-black mt-0.5 flex-1 text-base font-semibold'
                                            value={formRecipe.title}
                                            placeholder='Recipe name ...'
                                            placeholderTextColor="#000"
                                            onChangeText={(e) => setFormRecipe({ ...formRecipe, title: e })}
                                        />
                                    </View>
                                </View>

                                <View className="flex justify-center items-center px-4 ml-2 mr-2 mt-6">
                                    <View className="flex items-center">
                                        <Text className="text-xl font-bold ml-2 text-teal-700 mb-2">Type of meal and cuisine</Text>
                                        <MultipleSelectList
                                            setSelected={(e) => setSelectedTypeOfMeals(e)}
                                            data={typeOfMealsAndCuisine}
                                            placeholder='Select ...'
                                            boxStyles={{ backgroundColor: '#fff', borderRadius: 16, borderColor: '#9ca3af', borderWidth: 4, width: 300, height: 50 }}
                                            dropdownTextStyles={{ color: '#333', fontSize: 17 }}
                                            placeholderStyles={{ color: '#888', fontSize: 18, fontWeight: 'extrabold' }}
                                            dropdownStyles={{ backgroundColor: '#f9f9f9', borderColor: '#9ca3af', borderWidth: 4 }}
                                            searchicon={<Image source={icons.search} resizeMode='contain' className="w-4 h-4 mr-2" />}
                                            searchPlaceholder='Select ...'
                                            inputStyles={{ color: '#333', fontSize: 15, fontWeight: 'bold' }}
                                            arrowicon={<Image source={icons.arrowDown} resizeMode='contain' className="w-4 h-4" />}
                                            onSelect={() => setFormRecipe({ ...formRecipe, category: selectedTypeOfMeals })}
                                            save='key'
                                            notFoundText='Type not found'
                                            disabledCheckBoxStyles={{ backgroundColor: '#f9f9f9', borderColor: '#9ca3af', borderWidth: 4 }}
                                            label='Select ...'
                                            badgeStyles={{ backgroundColor: '#0f766e' }}
                                            badgeTextStyles={{ color: '#fff', fontWeight: 'bold' }}
                                        />
                                    </View>
                                </View>

                                <View className="ml-5 border-b-2 border-gray-400 w-44 mt-5 flex">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700 mb-2">Ingredients</Text>
                                    <View className='flex flex-row items-center space-x-4 px-3 bg-black-100'>
                                        <TextInput
                                            className='text-black mt-0.5 flex-1 text-base font-semibold'
                                            value={formRecipe.ingredients}
                                            placeholder='Recipe name ...'
                                            placeholderTextColor="#000"
                                            onChangeText={(e) => setFormRecipe({ ...formRecipe, ingredients: e })}
                                        />
                                        <Image source={icons.plus} resizeMode='contain' className="w-5 h-5 right-0" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </Modal>

            <ScrollView>
                <View>
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-5 mt-2">Last posted recipes</Text>
                </View>

                <View className="flex items-center">
                    <View className="flex-row justify-between px-4">
                        {myLastRecipes.map((item, index) => (
                            <CardStandart
                                key={index}
                                title={item.title}
                                user={item.user}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </View>
                </View>

                <View className="justify-center items-center mt-8">
                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <View className="flex-row items-center justify-center bg-slate-900 rounded-xl border-2 border-white p-5 mt-4">
                            {addButton({
                                icon: icons.post,
                                color: '#fff',
                                name: 'Add a new Recipe',
                                buttonStyle: 'w-7 h-7'
                            })}
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default addPosts
