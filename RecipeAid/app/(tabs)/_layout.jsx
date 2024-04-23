import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { icons } from '../../constants/icons';
import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font'

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

const TabsLayout = () => {
    return (
        <>
            <StatusBar backgroundColor='#D1D5DB' />
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#0F766E',
                tabBarInactiveTintColor: '#0F766E',
                tabBarStyle: {
                    backgroundColor: '#D1D5DB',
                    borderTopWidth: 2.5,
                    borderTopColor: '#0F766E',
                    height: 80,
                }
            }}>
                <Tabs.Screen name="home" options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.home} color={color} name="Home" focused={focused} iconBold={icons.homeBold} />
                }} />

                <Tabs.Screen name="search" options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.search} color={color} name="Search" focused={focused} iconBold={icons.searchBold} />
                }} />

                <Tabs.Screen name="addPosts" options={{
                    title: 'addPosts',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.post} color={color} name="Add Post" focused={focused} iconBold={icons.postBold} />
                }} />

                <Tabs.Screen name="profile" options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} iconBold={icons.profileBold} />
                }} />

            </Tabs>
        </>

    )
}

export default TabsLayout