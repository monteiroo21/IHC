import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Modal, Image, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants/icons'
import CardStandart from '../../components/CardStandart'
import { myRecipes, recipes } from '../../constants/data';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list';
import ButtonStandart from '../../components/ButtonStandart'

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
    const [ingredients, setIngredients] = useState([]);
    const [ingredient1, setIngredient1] = useState("");
    const [isVegan, setIsVegan] = useState(false);

    const [LastRecipes, setLastRecipes] = useState([...myLastRecipes]);

    const addIngredients = (ingredient) => {
        if (!ingredient) return;
        setIngredients([...ingredients, ingredient]);
        setFormRecipe({ ...formRecipe, ingredients: [...ingredients, ingredient] });
    }

    const removeIngredients = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
        setFormRecipe({ ...formRecipe, ingredients: newIngredients });
    }

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
        steps: "",
        rating: 0,
        category: [],
        time: 0,
        vegan: false,
        rating: 0,
        type: 1,
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

                                <View className="ml-5 border-b-2 border-gray-400 w-56 mt-5 flex">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700 mb-2">Ingredients</Text>
                                    <View className='flex flex-row items-center space-x-4 px-3 bg-black-100'>
                                        <TextInput
                                            className='text-black mt-0.5 flex-1 text-base font-semibold'
                                            value={formRecipe.ingredients}
                                            placeholder='Add an ingredient ...'
                                            placeholderTextColor="#000"
                                            onChangeText={(e) => setIngredient1(e)}
                                            onSubmitEditing={() => {
                                                addIngredients(ingredient1);
                                                // setFormRecipe({ ...formRecipe, ingredients: ingredients })
                                            }
                                            }
                                        />
                                        <TouchableOpacity onPress={() => {
                                            addIngredients(ingredient1);
                                            // setFormRecipe({ ...formRecipe, ingredients: ingredients })
                                        }}>
                                            <Image source={icons.plus} resizeMode='contain' className="w-5 h-5 right-0" />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                <View>
                                    {ingredients.map((ingredient, index) => (
                                        <View key={index} className="flex-row mt-2 border-2 border-gray-400 h-8 w-28 ml-5 rounded-lg align-middle">
                                            <Text className="ml-2 mt-1 mr-4">{ingredient}</Text>
                                            <TouchableOpacity onPress={() => removeIngredients(index)}>
                                                <Image source={icons.x} resizeMode='contain' className="h-4 w-4 mt-1" />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>

                                <View className="mt-10 justify-center items-center w-5/6 h-28 ml-7">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700 mb-2">Description</Text>
                                    <TextInput className="border-2 border-gray-400 rounded-lg h-28 w-full p-4" multiline={true} numberOfLines={4} placeholder="Description of the recipe ..."
                                        onChangeText={(e) => setFormRecipe({ ...formRecipe, description: e })}
                                    />
                                </View>

                                <View className="mt-14 justify-center items-center w-5/6 h-60 ml-7">
                                    <Text className="text-2xl font-extrabold ml-2 text-teal-700 mb-2">Steps</Text>
                                    <TextInput className="border-2 border-gray-400 rounded-lg h-60 w-full p-4" multiline={true} numberOfLines={4} placeholder="Steps to prepare the recipe ..."
                                        onChangeText={(e) => setFormRecipe({ ...formRecipe, steps: e })}
                                    />
                                </View>

                                <View className="mt-14 ml-5 flex-row">
                                    <TouchableOpacity onPress={() => { setFormRecipe({ ...formRecipe, vegan: !isVegan }); setIsVegan(!isVegan) }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text className="text-lg font-bold text-teal-700 mb-2 mt-2">Vegan</Text>
                                        <View style={{ backgroundColor: '#fff', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }} className="border-2 border-gray-400 rounded-lg ml-2">
                                            {isVegan ? (
                                                <Image source={icons.check} style={{ width: 20, height: 20 }} resizeMode='contain' />
                                            ) : null}
                                        </View>
                                    </TouchableOpacity>

                                    {/* Cria me aqui um textinput onde coloco o tempo da receita por favor */}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                        <Text className="text-lg font-bold ml-2 text-teal-700 mb-2 mt-2">Tempo (min)</Text>
                                        <TextInput
                                            style={{ backgroundColor: '#fff', width: 80, height: 40, marginLeft: 10, paddingLeft: 10 }}
                                            placeholder="Tempo"
                                            keyboardType="numeric"
                                            onChangeText={(text) => setFormRecipe({ ...formRecipe, time: parseInt(text) })} // Converta para inteiro antes de definir o estado
                                            className="border-2 border-gray-400 rounded-lg ml-2"
                                        />
                                    </View>
                                </View>

                                <View className="mt-5 mb-5 justify-center items-center">
                                    <ButtonStandart
                                        title="Post Recipe"
                                        handlePress={() => {
                                            setFormRecipe({ ...formRecipe, rating: 0 });
                                            setFormRecipe({ ...formRecipe, user: "Manuel Augusto" });
                                            setFormRecipe({ ...formRecipe, vegan: isVegan });
                                            setFormRecipe({ ...formRecipe, ingredients: ingredients });
                                            recipes.push(formRecipe);
                                            setLastRecipes([...recipes.filter(recipe => recipe.user === "Manuel Augusto").slice(-2)]);
                                            // recipes.filter(recipe => recipe.user === "Manuel Augusto");
                                            setModalVisible(false);
                                            setFormRecipe({
                                                user: "Manuel Augusto",
                                                title: "",
                                                image: "",
                                                description: "",
                                                ingredients: [],
                                                steps: "",
                                                rating: 0,
                                                category: [],
                                                time: 0,
                                                vegan: false,
                                                rating: 0,
                                                type: 1,
                                            });
                                            setSelectedImage(null);
                                            setSelectedTypeOfMeals([]);
                                            setIngredients([]);
                                            setIsVegan(false);
                                        }}
                                        containerStyles="w-72 h-14 bg-green-800 rounded-xl"
                                        textStyles="text-white font-bold text-2xl"
                                    />
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
                        {LastRecipes.map((item, index) => (
                            <CardStandart
                                key={index}
                                title={item.title}
                                user={item.user}
                                image={item.image}
                                rating={item.rating}
                                type={item.type}
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
