import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Modal, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants/icons'
import CardStandart from '../../components/CardStandart'
import { myRecipes, recipes } from '../../constants/data';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar'

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
                <Image source={{ uri: imageUri }} resizeMode='cover' style={{ width: 100, height: 100 }} />
            ) : (
                <Image source={icon} resizeMode='contain' tintColor={color} className={`${buttonStyle}`} />
            )}
            <Text className="text-lg" style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const addPosts = () => {
    const myLastRecipes = myRecipes.slice(-2);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    
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
            // console.log(result.assets[0]);
            // console.log(result.assets[0]["fileName"]);
            setFormRecipe({ ...formRecipe, image: result.assets[0]["uri"] });
        }
    }

    console.log(formRecipe);

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
                <StatusBar backgroundColor='#000' />
                <View className="flex-1 justify-center items-center bg-black bg-opacity-50 mb-1">
                    <View className="w-11/12 bg-white rounded-lg relative h-full mb-4 mt-5">
                        <TouchableOpacity
                            className="absolute top-3 right-3 bg-gray-300 rounded-xl mt-3"
                            onPress={() => setModalVisible(false)}
                        >
                            <Text className="text-lg px-4 py-2">X</Text>
                        </TouchableOpacity>
                        <View className="p-5">
                            <Text className="text-2xl font-extrabold mt-3">Create a new Recipe</Text>
                            <View>
                                <TouchableOpacity onPress={() => openPicker('image')}>
                                    <View className="flex items-center justify-center mt-7">
                                        <View key={selectedImage} className="w-64 h-36  border-4 border-gray-400 rounded-lg justify-center items-center">
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
                        </View>
                    </View>
                </View>
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
