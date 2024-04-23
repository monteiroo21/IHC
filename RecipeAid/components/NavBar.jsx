import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { icons } from '../constants/icons';

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
                    color='#fff'
                    size={35} // Increase the icon size
                    onPress={() => alert('Menu!')}
                />
            }
            centerComponent={
                <View className="justify-center items-center">
                    <Image source={icons.logotipo} className="w-8 h-8 rounded-full"/>
                    <Text paddingBottom={35} color={"#84CC16"}>RecipeAid</Text> 
                </View>
            }
            rightComponent={
                <Icon
                    name='account-circle'
                    color='#fff'
                    size={35} // Increase the icon size
                    onPress={() => alert('Account!')}
                />
            }
        />
    );
}

export default NavBar;
