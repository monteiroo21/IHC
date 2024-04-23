import React, { useEffect } from 'react'
import GlobalProvider from '../context/GlobalProvider'
import { SplashScreen, Stack } from 'expo-router'

const AppLayout = () => {
    return (
        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>

        </GlobalProvider>

    )
}

export default AppLayout