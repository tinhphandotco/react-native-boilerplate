import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, extendTheme } from 'native-base'

import useCachedResources from './hooks/useCachedResources'
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import Onboarding from './screens/onboarding/Onboarding'
import Register from './screens/register'
import Login from './screens/login'

import configureStore from './redux/configureStore'

import * as Colors from './themes/colors'

const store = configureStore()

export default function App() {
  const isLoadingComplete = useCachedResources()
  // const colorScheme = useColorScheme();

  const colorScheme = 'light'

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E5EFFE',
        100: Colors.Colors.primary,
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      black: {
        100: '#191B20',
      },
      blue: {
        100: Colors.Colors.primary,
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'light',
    },
  })

  return (
    <Provider store={store}>
      {isLoadingComplete ? (
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            {/* <Onboarding /> */}
            {/* <Register /> */}
            <Login />
            {/* <Navigation colorScheme={colorScheme} /> */}
            <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
          </NativeBaseProvider>
        </SafeAreaProvider>
      ) : null}
    </Provider>
  )
}
