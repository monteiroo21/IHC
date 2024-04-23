import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { icons } from '../../constants/icons';
import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import NavBar from '../../components/NavBar';

const TabIcon = ({ icon, color, name, focused, iconBold }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={focused ? iconBold : icon} resizeMode='contain' tintColor={color} className="w-7 h-7" />
            <Text className={`${focused ? 'font-extrabold' : 'font-medium'} text-sm`} style={{ color: color, textDecorationLine: focused ? 'underline' : 'none' }}>
                {name}
            </Text>
        </View>
    )

}

const TabsLayout = () => {
    return (
        <>
            <NavBar />
            <StatusBar backgroundColor='#E5E7EB' />
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#E5E7EB',
                tabBarInactiveTintColor: '#E5E7EB',
                tabBarStyle: {
                    backgroundColor: '#0D9488',
                    borderTopWidth: 2.5,
                    borderTopColor: '#E5E7EB',
                    height: 82,
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