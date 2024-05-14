import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { savedRecipes, recipes } from '../../constants/data';
import CardStandart from '../../components/CardStandart';
import { SafeAreaView } from 'react-native-safe-area-context';

const categoryScreen = () => {
    const [category1, setCategory1] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const CategoryData = await AsyncStorage.getItem('category');
                setCategory1(CategoryData);

            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, []);

    console.log(category1);
    const categoryRecipes = recipes.filter((recipe) => recipe.category.some((cat) => cat === category1.toLowerCase()));

    console.log(categoryRecipes);


    return (
        <SafeAreaView className="h-full bg-slate-900">
            <NavBar />
            <View className="mt-5 justify-center items-center mb-7">
                <Text className="text-teal-600 text-3xl font-bold">{category1}</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={categoryRecipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <CardStandart
                            title={item.title}
                            user={item.user}
                            image={item.image}
                            rating={item.rating}
                            ingredients={item.ingredients}
                            steps={item.steps}
                            time={item.time}
                            description={item.description}
                            type={item.type}
                            cardStyle={{ width: 200, height: 300, marginRight: 10 }}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default categoryScreen