import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable, Modal, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants/icons'
import CardStandart from '../../components/CardStandart'
import { myRecipes } from '../../constants/data';

const addButton = ({ icon, color, name }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' tintColor={color} className="w-7 h-7" />
            <Text className="text-lg" style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const addPosts = () => {
    const myLastRecipes = myRecipes.slice(-2);
    const [modalVisible, setModalVisible] = useState(false);

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
                <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                    <View className="w-10/12 bg-white rounded-lg p-5 relative h-5/6">
                        <Pressable
                            className="absolute top-3 right-3 p-4 bg-gray-300 rounded-full"
                            onPress={() => setModalVisible(false)}
                        >
                            <Text className="text-xl">X</Text>
                        </Pressable>
                        <Text className="text-lg font-bold mb-4">Your Modal Title</Text>
                        <Text>Here's some content for your modal.</Text>
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
                                name: 'Add a new Recipe'
                            })}
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default addPosts
