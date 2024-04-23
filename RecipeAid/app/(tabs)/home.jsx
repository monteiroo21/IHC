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
                    imageUrl="https://example.com/some-image-url.jpg"
                />
                <Card
                    title="Porco Grelhado"
                    imageUrl="https://example.com/some-image-url.jpg"
                />
            </View>
        </ScrollView>
    )
}

export default Home