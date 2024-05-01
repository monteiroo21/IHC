import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Card from '../../components/Card';
import { recipes, myRecipes, savedRecipes } from '../../constants/data';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    console.log(recipes);
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <ScrollView>
                <FlatList 
                    data={recipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            user={item.user}
                            image={item.image}
                        />
                    )}
                    horizontal
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home