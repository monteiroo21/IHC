import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { icons } from '../constants/icons';
import { router } from 'expo-router';
import CustomButton from './CustomButton';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [offsetX] = useState(new Animated.Value(-300));

    const toggleMenu = () => {
        Animated.timing(offsetX, {
            toValue: menuVisible ? -300 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setMenuVisible(!menuVisible);
    };

    const handleMenuItemClick = (path) => {
        router.push(path);
        toggleMenu();
    }

    return (
        <>
            <Header
                containerStyle={{
                    height: 70,
                    alignItems: 'top',
                    paddingTop: 0,
                    backgroundColor: '#0F766E',
                    paddingBottom: 0,
                    borderBottomWidth: 0,
                }}
                leftComponent={
                    <TouchableOpacity onPress={toggleMenu}>
                        <Image
                            source={icons.menu}
                            resizeMode='contain'
                            className="w-7 h-7 mx-0.5"
                            tintColor={'#84CC16'}
                        />
                    </TouchableOpacity>
                }
                centerComponent={
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icons.logotipo} style={{ width: 40, height: 40 }} />
                        <Text style={{ color: '#84CC16', fontSize: 20, fontWeight: 'bold', marginLeft: 8 }} onPress={() => router.push('/home')}>RecipeAid</Text>
                    </View>
                }
                rightComponent={
                    <TouchableOpacity onPress={() => router.push('/Screens/profile')}>
                        <Image
                            source={icons.persona}
                            resizeMode='contain'
                            style={{ width: 36, height: 36, borderRadius: 18 }}
                        />
                    </TouchableOpacity>
                }
            />
            {menuVisible && (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 300,
                        width: Dimensions.get('window').width - 300,
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.4)', // Semi-transparente
                        zIndex: 5
                    }}
                    onPress={toggleMenu}
                />
            )}
            <Animated.View style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 300,
                height: '100%',
                backgroundColor: '#0F766E',
                padding: 20,
                transform: [{ translateX: offsetX }],
                zIndex: 10
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20, paddingBottom: 12 }} className="mt-7 border-b-4 border-lime-500">
                    <CustomButton
                        title=""
                        handlePress={toggleMenu}
                        containerStyles="border border-2 border-lime-500 rounded-lg w-12 h-12 justify-center items-center"
                        textStyles="text-lime-500 text-2xl font-bold justify-center items-center"
                        image={icons.x}
                        imageStyles="w-5 h-5 color-lime-500 justify-center items-center mb-3"
                        imageColor="#84CC16"
                    />
                    <Image source={icons.logotipo} style={{ width: 50, height: 50, borderRadius: 16, marginLeft: 10 }} />
                    <Text style={{ color: '#84CC16', fontSize: 28, fontWeight: 'bold', marginLeft: 4 }}>RecipeAid</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 3, borderColor: '#84CC16' }} onPress={() => handleMenuItemClick('/home')}>
                    <Image source={icons.homeBold} style={{ width: 24, height: 24, marginRight: 8, tintColor: '#84CC16', marginRight: 6, marginLeft: 15 }} />
                    <Text style={{ margin: 15 }} className="text-lime-500 text-3xl" onPress={() => handleMenuItemClick('/home')}>Home</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 3, borderColor: '#84CC16' }}>
                    <Image source={icons.searchBold} style={{ width: 24, height: 24, marginRight: 8, tintColor: '#84CC16', marginRight: 6, marginLeft: 15 }} onPress={() => handleMenuItemClick('/search')} />
                    <Text style={{ margin: 15 }} className="text-lime-500 text-3xl" onPress={() => handleMenuItemClick('/search')}>Search</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 3, borderColor: '#84CC16' }}>
                    <Image source={icons.postBold} style={{ width: 24, height: 24, marginRight: 8, tintColor: '#84CC16', marginRight: 6, marginLeft: 15 }} onPress={() => handleMenuItemClick('/addPosts')} />
                    <Text style={{ margin: 15 }} className="text-lime-500 text-3xl" onPress={() => handleMenuItemClick('/addPosts')}>Add Recipe</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 3, borderColor: '#84CC16' }}>
                    <Image source={icons.save} style={{ width: 24, height: 24, marginRight: 8, tintColor: '#84CC16', marginRight: 6, marginLeft: 15 }} onPress={() => handleMenuItemClick('/recipes')} />
                    <Text style={{ margin: 15 }} className="text-lime-500 text-3xl" onPress={() => handleMenuItemClick('/recipes')}>My Recipes</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderBottomWidth: 3, borderColor: '#84CC16' }}>
                    <Image source={icons.profileBold} style={{ width: 24, height: 24, marginRight: 8, tintColor: '#84CC16', marginRight: 6, marginLeft: 15 }} onPress={() => handleMenuItemClick('/profile')} />
                    <Text style={{ margin: 15 }} className="text-lime-500 text-3xl" onPress={() => handleMenuItemClick('/Screens/profile')}>Profile</Text>
                </View>

            </Animated.View >
        </>
    );
}

export default NavBar;

