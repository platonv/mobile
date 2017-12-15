import React from 'react'
import {
  ToolbarAndroid,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native'
import GroupService from '../../services/groupService'

let dataList = GroupService.findAll()

export default class GroupsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataList: dataList,
    }
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.Id !== r2.Id,
    })
    this.state = { dataSource: dataSource.cloneWithRows(dataList) }
    this.openJob = this.openGroup.bind(this)
  }

  openGroup(group) {
    this.props.navigation.navigate('GroupDetailsPage', group)
  }

  _renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => this.openGroup(rowData)}>
        <View style={styles.container}>
          <Text style={styles.textLeft}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        <StatusBar />
        <Button
          style={{ fontWeight: 'bold', fontSize: 24, size: 150 }}
          title={'Add group'}
          onPress={() => this.props.navigation.navigate('AddGroupPage')}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
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
