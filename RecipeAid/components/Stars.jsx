import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

const Stars = ({ value, max = 5 }) => {
    let stars = [];

    // Calculate the number of full, half, and empty stars
    const fullStars = Math.floor(value);
    const halfStar = (value % 1) >= 0.5 ? 1 : 0;
    const emptyStars = max - fullStars - halfStar;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Icon key={`full-${i}`} name="star" size={24} color="gold" />);
    }

    // Add half star
    if (halfStar) {
        stars.push(
            <View key="half-1" style={styles.halfStarContainer}>
                <Icon name="star-half-o" size={24} color="gold" style={styles.halfStarOverlay} />
            </View>
        );
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Icon key={`empty-${i}`} name="star-o" size={24} color="gold" />);
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {stars}
        </View>
    );
};

const styles = StyleSheet.create({
    halfStarContainer: {
        position: 'relative'
    },
    halfStarOverlay: {
        position: 'absolute',
        left: 0, // adjust this value based on the size of your icon to cover half
        zIndex: 0
    }
});

export default Stars;