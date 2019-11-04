
import React from 'react'
import { Icon } from 'react-native-elements';
import { COLORS } from '../utils/styles'

const BBIcon = props => {
  return (
    <Icon
      {...props}
      color={props.focused ? COLORS.tan : COLORS.white}
      size={props.focused ? 26 : 22}
    />
  )
}

export default BBIcon