import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { Provider } from 'mobx-react'
import Navigation from './src/navigation'
import store from './src/store/GameStore'

export default function App () {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}
