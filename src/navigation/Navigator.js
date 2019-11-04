import React from 'react'

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import { COLORS } from '../utils/styles'
import { ICONS } from '../utils/icons'
import Icon from '../components/BBIcon'

import TestScreen from './test'
import HomeScreen from './home'


export default createNavigator = (props) => {
  return createAppContainer(createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({focused}) => (
            <Icon
              {...ICONS.book}
              focused={focused}
            />
          )
        }
      },
      Test: {
        screen: TestScreen,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              {...ICONS.camera}
              focused={focused}
            />
          )
        }
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
      tabBarOptions: {
        style: {
          backgroundColor: COLORS.blue
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        },
        activeTintColor: COLORS.tan,
        inactiveTintColor: COLORS.white
      }
    }
  ))
}
