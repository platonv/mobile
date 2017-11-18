import React from 'react'
import {
  ToolbarAndroid,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { Row } from './listRow'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows([
        { name: 'Nuka Bistro' },
        { name: 'Euphoria Biergarten' },
        { name: 'Zama' },
        { name: 'Cafe Francesca' },
        { name: 'Napoca 15' },
      ]),
    }
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textLeft}>{rowData.name}</Text>
          <Text style={styles.textRight}>5 votes</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        <StatusBar />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
  openJob = job => {
    alert('Selected job: ' + job.name)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ECEFF1',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  textLeft: {
    color: '#263238',
    textAlign: 'left',
    fontSize: 18,
  },
  textRight: {
    color: '#263238',
    textAlign: 'right',
  },
  body: {
    marginTop: 20,
  },
  toolbar: {
    height: 70,
    backgroundColor: '#01579B',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  toolbarContent: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarText: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
})
