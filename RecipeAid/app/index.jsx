import { ScrollView, StatusBar, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { icons } from '../constants/icons';

export default function App() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView className="bg-gray-200 h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="justify-center items-center flex-1">
                    <Image source={icons.logotipo} resizeMode='contain' className="w-52 h-52" />
                    <Text className="text-6xl font-semibold text-teal-700 justify-center items-center">
                        RecipeAid
                    </Text>
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#E5E7EB' />
        </SafeAreaView >
    );
}
