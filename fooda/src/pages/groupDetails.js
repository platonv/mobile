import React from 'react'
import {
  Alert,
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native'
import GroupService from '../services/groupService'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart: {
    width: 200,
    height: 200,
  },
})

const data = [[0, 1], [1, 3], [3, 7], [4, 9]]

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props)
    let group = this.props.navigation.state.params
    this.state = {
      newName: '',
      group,
    }
    this.state.newName = group.name
    this.state.name = group.name
  }

  save(group) {
    GroupService.update(group, () => {
      group.name = this.state.newName
    })
    this.props.navigation.navigate('GroupsListPage')
  }

  delete(group) {
    Alert.alert('Delete', 'Do you want to delete this group?', [
      { text: 'Cancelar', onPress: () => console.log('Cancel Pressed!') },
      {
        text: 'Yes',
        onPress: () => {
          GroupService.delete(group)
          this.props.navigation.navigate('GroupsListPage')
        },
      },
    ])
  }

  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', color: '#3498db', fontSize: 20 }}>
          Name:{this.state.name}
        </Text>
        <Text />
        <TextInput
          style={{
            fontWeight: 'bold',
            color: '#2980b9',
            fontSize: 20,
            height: 40,
            width: 100,
            borderColor: '#ccc',
          }}
          onChangeText={newName => this.setState({ newName })}
          value={this.state.newName}
        />
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Update'}
          onPress={() => this.save(this.state.group)}
        />
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Delete'}
          onPress={() => this.delete(this.state.group)}
        />
      </View>
    )
  }
}
