import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native'

export default class RestaurantDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      originalName: '',
    }
    let restaurant = this.props.navigation.state.params
    this.state.name = restaurant.name
    this.state.originalName = restaurant.name
  }

  save() {
    let item = this.state
    for (let i = 0; i < global.restaurants.length; i++) {
      if (global.restaurants[i].name === item.originalName) {
        global.restaurants[i] = { name: item.name }
      }
    }
    console.log(global.restaurants)
    this.props.navigation.navigate('RestaurantsList')
  }

  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', color: '#3498db', fontSize: 20 }}>
          Name:{this.state.originalName}
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
          onPress={() => this.save()}
        />
      </View>
    )
  }
}
