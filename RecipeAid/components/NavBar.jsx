import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { icons } from '../constants/icons';
import Home from '../app/(tabs)/home';

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused, iconBold }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={focused ? iconBold : icon} resizeMode='contain' tintColor={color} className="w-7 h-7" />
            <Text className={`${focused ? 'font-extrabold' : 'font-medium'} text-s`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    )

}

const NavBar = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#f0edf6",
          tabBarInactiveTintColor: "#3e2465",
          tabBarStyle: { backgroundColor: '#694fad' }
        }}
      >
        <Tab.Screen
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon="home" color={color} name="Home" focused={focused} />
            )
          }}
        />
      </Tab.Navigator>
  );
};

export default NavBar;