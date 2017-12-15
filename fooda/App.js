import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Email from './src/components/email'
import Login from './src/pages/login'
import GroupsList from './src/components/groups/groupsList'
import GroupDetails from './src/pages/groupDetails'
import RestaurantsList from './src/components/restaurants/restaurantsList'
import RestaurantDetails from './src/pages/restaurantDetails'
import AddGroup from './src/pages/addGroup'

global.restaurants = [
  { name: 'Nuka Bistro' },
  { name: 'Euphoria Biergarten' },
  { name: 'Zama' },
  { name: 'Cafe Francesca' },
  { name: 'Napoca 15' },
]

const App = StackNavigator({
  Login: {
    screen: Login,
  },
  RestaurantListPage: {
    screen: RestaurantsList,
  },
  RestaurantPage: {
    screen: RestaurantDetails,
  },
  GroupsListPage: {
    screen: GroupsList,
  },
  GroupDetailsPage: {
    screen: GroupDetails,
  },
  AddGroupPage: {
    screen: AddGroup,
  },
  Email: {
    screen: Email,
  },
})

export default App
