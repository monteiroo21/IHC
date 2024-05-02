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
            <ScrollView>
                <Text className="text-3xl text-lime-500 font-extrabold text-center mb-3">
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
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="mt-8">
                    <Text className="text-3xl text-lime-500 font-extrabold text-center mb-5">
                        Categories
                    </Text>
                    <View className="justify-center items-center">
                        <View className="flex-row mb-2">
                            <CategoryButton
                                category="Pizza"
                                image={icons.pizzaIcon}
                            />
                            <CategoryButton
                                category="Hamburger"
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