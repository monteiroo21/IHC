import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Card from '../../components/Card';
import { useGlobalContext } from '../../context/GlobalProvider';

const Home = () => {
    const { recipes } = useGlobalContext();
    console.log(recipes);
    
    return (
        <SafeAreaView className="bg-gray-200 h-full">
            {/* <FlatList
                data={recipes}
                keyExtractor={(item) => [item.title, item.user]}
                renderItem={({ item }) => (
                    <Card
                        user={item.user}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        ingredients={item.ingredients}
                        rating={item.rating}
                    />
                )}
            >
            </FlatList> */}
            <View>
                <Text>Home</Text>
            </View>

        </SafeAreaView>
    )
}

export default Home