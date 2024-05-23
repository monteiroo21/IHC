import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { ingredients, vegetables, proteins } from '../constants/data.js'
import IngredientsCard from './IngredientsCard.jsx'
import SearchBar from './SearchBar.jsx'
import { recipes } from '../constants/data.js'
import CardStandart from './CardStandart.jsx'

function SearchByName() {
    const [filteredData, setFilteredData] = useState([]);
    const [showRecommended, setShowRecommended] = useState(true);
    const recipe = recipes;

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setFilteredData([]);  // Reset to full list when query is cleared
        } else {
            const formattedQuery = query.toLowerCase();
            const filtered = recipes.filter(item => item.title.toLowerCase().includes(formattedQuery));
            setFilteredData(filtered);
        }
    };

    return (
        <SafeAreaView className="h-full bg-slate-900 flex items-center">
            <SearchBar className="ml-4 mt-4" placeholder={"Search Recipe..."} onSearchSubmit={handleSearch}></SearchBar>
            <FlatList
                className="mt-6"
                data={filteredData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardStandart
                        title={item.title}
                        user={item.user}
                        image={item.image}
                        rating={item.rating}
                        type={item.type}
                        ingredients={item.ingredients}
                        steps={item.steps}
                        time={item.time}
                        description={item.description}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>

    );
}

export default SearchByName;