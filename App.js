import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { Provider } from 'mobx-react'
import Navigation from './src/navigation'
import GameStore from './src/stores/GameStore'

export default function App () {
  return (
    <Provider gameStore={GameStore}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}
