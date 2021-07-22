import React from 'react'
import AppLoading from 'expo-app-loading'

import { SplashScreen } from './src/screens/SplashScreen'

import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return <SplashScreen />
}
