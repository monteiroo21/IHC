import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Card from '../../components/Card';

const Home = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <Card
                    title="Bacalhau à Brás"
                    imageUrl="https://casacaroba.com/wp-content/uploads/2023/06/bacalhau-a-bras-scaled.jpg"
                />
                <Card
                    title="Porco Grelhado"
                    imageUrl="https://www.apir.org.pt/wp-content/uploads/2020/01/lombinho-600x600.jpg"
                />
            </View>
        </ScrollView>
    )
}

export default Home