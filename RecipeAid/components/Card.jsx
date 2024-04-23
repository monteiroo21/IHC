import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, description, imageUrl }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
            <View style={styles.cardTextOverlay}>
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
        width: '45%',  // Adjust as per your layout requirements
    },
    cardImage: {
        width: '100%',
        height: 400,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    cardTextOverlay: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',  // Semi-transparent black background
        width: '100%',
        padding: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',  // White text for better visibility against the dark background
    },
});

export default Card;