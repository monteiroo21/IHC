import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, imageUrl }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        margin: 5,
        width: '45%', // each card will take roughly 30% of the container width
    },
    cardImage: {
        width: '100%',
        height: 400, // Reduced height
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardContent: {
        padding: 5, // Reduced padding
    },
    cardTitle: {
        fontSize: 14, // Reduced font size
        fontWeight: 'bold',
        marginBottom: 2,
    },
    cardDescription: {
        fontSize: 12, // Reduced font size
        color: '#666',
    },
});


export default Card;