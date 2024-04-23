import React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const NavBar = () => {
    return (
        <Header
            containerStyle={{
                height: 70, // Increase the height to provide more space for centering
                alignItems: 'top', // This ensures all components are vertically centered
                paddingTop: 0, // Adjust padding to make sure alignment is centered
                backgroundColor: '#0D9488',
                paddingBottom: 0,
            }}
            leftComponent={
                <Icon
                    name='menu'
                    color='#fff'
                    size={30} // Increase the icon size
                    onPress={() => alert('Menu!')}
                />
            }
            centerComponent={{
                text: 'RecipeAid',
                style: { color: '#fff', fontSize: 22 } // Increase the font size
            }}
            rightComponent={
                <Icon
                    name='account-circle'
                    color='#fff'
                    size={30} // Increase the icon size
                    onPress={() => alert('Account!')}
                />
            }
        />
    );
}

export default NavBar;
