import * as React from 'react';
import { Feather as DefaultFeather } from '@expo/vector-icons'
import { Text as DefaultText, View as DefaultView } from 'react-native'

export function Feather(props) {
  return <DefaultFeather
          name={props.name}
          size={props.size}
          color={props.color}
          style={props.style}
        />
}
