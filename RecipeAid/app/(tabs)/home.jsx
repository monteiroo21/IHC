import { View, Text, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Card from '../../components/Card';
import { recipes, myRecipes, savedRecipes } from '../../constants/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CategoryButton from '../../components/CategoryButton';
import { icons } from '../../constants/icons';

const Home = () => {
    const firstThreeRecipes = recipes.slice(0, 3);

    return (
        <SafeAreaView className="h-full bg-slate-900">
            <ScrollView style={{ marginTop: -30 }}>
                <Text className="text-3xl text-white font-extrabold text-center mb-3 mt-5">
                    Suggestions for you
                </Text>
                <FlatList
                    data={firstThreeRecipes}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <Card
                            title={item.title}
                            user={item.user}
                            image={item.image}
                            rating={item.rating}
                            ingredients={item.ingredients}
                            steps={item.steps}
                            time={item.time}
                            description={item.description}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="mt-10">
                    <Text className="text-3xl text-white font-extrabold text-center mb-3">
                        Categories
                    </Text>
                    <View className="justify-center items-center mb-5">
                        <View className="flex-row mb-2">
                            <CategoryButton
                                category="Pizza"
                                image={icons.pizzaIcon}
                            />
                            <CategoryButton
                                category="Hamburguer"
                                image={icons.hamburgerIcon}
                            />
                        </View>
                        <View className="flex-row">
                            <CategoryButton
                                category="Dessert"
                                image={icons.dessertIcon}
                            />
                            <CategoryButton
                                category="Steak"
                                image={icons.steakIcon}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home