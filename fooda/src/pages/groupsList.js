import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import GroupsList from '../components/restaurants/groupsList'

export default class Groups extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 2 }}>
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Add group'}
          onPress={() => this.props.navigation.navigate('AddGroupPage')}
        />
        <GroupsList style={{ flex: 1 }} />
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Add group'}
          onPress={() => this.props.navigation.navigate('AddGroupPage')}
        />
      </View>
    )
  }
}
