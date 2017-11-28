import React from 'react'
import { Text, TextInput, View, Linking, Button } from 'react-native'

export default class Email extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mail: 'fooda@gmail.com',
      subject: 'Contact',
      text: '',
    }
  }

  sendEmail = () => {
    let mail = this.state.mail
    let subject = this.state.subject
    let text = this.state.text

    Linking.openURL(
      'mailto:' +
        JSON.stringify(mail) +
        '?subject=' +
        JSON.stringify(subject) +
        '&body=' +
        JSON.stringify(text)
    )
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{ fontWeight: 'bold', color: '#3498db', fontSize: 20 }}>
            Subject:
          </Text>
          <TextInput
            onChangeText={subject => this.setState({ subject })}
            value={this.state.subject}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', color: '#3498db', fontSize: 20 }}>
            Message:
          </Text>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <Button onPress={this.sendEmail} title={'Send us an email'} />
      </View>
    )
  }
}
