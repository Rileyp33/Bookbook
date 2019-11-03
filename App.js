import React from 'react'
import createNavigator from './src/navigation/Navigator'

const App = () => {
  const Navigator = createNavigator()

  return (
    <React.Fragment>
      <Navigator/>
    </React.Fragment>
  )
}

export default App

// Disables yellow box debug tools
console.disableYellowBox = true
