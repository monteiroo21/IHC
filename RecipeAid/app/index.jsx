import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView className="bg-gray-300 h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="justify-center items-center flex-1">
                    <Text className="text-6xl font-semibold text-teal-800 justify-center items-center">
                        RecipeAid
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}
