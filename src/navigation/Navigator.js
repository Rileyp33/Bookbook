import { createStackNavigator, createAppContainer } from 'react-navigation'
import TestScreen from './test'

export default createNavigator = (props) => {
  return createAppContainer(createStackNavigator(
    {
      Test: TestScreen
    },
    {
      initialRouteName: 'Test',
      headerMode: 'none'
    }
  ))
}
