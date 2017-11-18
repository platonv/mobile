import React from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import Form from '../components/form'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Fooda</Text>
        <Form />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <Text style={styles.signupButton}>Sign-up</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#77bbe2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 25,
  },
  mainText: {
    color: '#fff',
    fontSize: 18,
  },
  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    fontWeight: '500',
  },
})
