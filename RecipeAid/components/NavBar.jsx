import React from 'react';
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { icons } from '../constants/icons';
import { router } from 'expo-router';

const NavBar = () => {
    return (
        <Header
            containerStyle={{
                height: 70, // Increase the height to provide more space for centering
                alignItems: 'top', // This ensures all components are vertically centered
                paddingTop: 0, // Adjust padding to make sure alignment is centered
                backgroundColor: '#0F766E',
                paddingBottom: 0,
            }}
            leftComponent={
                <Icon
                    name='menu'
                    color='#84CC16'
                    size={35} // Increase the icon size
                    onPress={() => alert('Menu!')}
                />
            }
            centerComponent={
                <View className="justify-center items-center flex-row">
                    <Image source={icons.logotipo} className="w-8 h-8 rounded-full" />
                    <Text className="text-lime-500 text-2xl font-bold mx-2" onPress={() => router.push('/home')}>RecipeAid</Text>
                </View>
            }
            rightComponent={
                <TouchableOpacity onPress={() => router.push('/profile')}>
                    <Image
                        source={icons.persona}
                        resizeMode='contain'
                        className="w-9 h-9 mx-0.5 rounded-full"
                    />
                </TouchableOpacity>

            }
        />
    );
}

export default NavBar;
