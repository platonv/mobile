import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import RestaurantsList from '../components/restaurants/restaurantsList'

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <RestaurantsList />
  }
}
