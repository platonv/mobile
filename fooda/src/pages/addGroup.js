import React from 'react'
import {
  Alert,
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
  Picker,
} from 'react-native'
import GroupModel from '../models/group'
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
      name: '',
      type: '',
    }
  }

  save(groupName) {
    GroupService.save(new GroupModel(groupName))
    this.props.navigation.navigate('GroupsListPage')
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
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Save'}
          onPress={() => this.save(this.state.name)}
        />
        <Picker
          style={{
            height: 40,
            width: 100,
          }}
          selectedValue={this.state.type}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ type: itemValue })
          }
        >
          <Picker.Item label="School" value="school" />
          <Picker.Item label="Work" value="work" />
        </Picker>
      </View>
    )
  }
}
