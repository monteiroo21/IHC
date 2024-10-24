import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SearchTabs from '../../components/SearchTabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  return (
    <SearchTabs/>
  );
}

export default Search