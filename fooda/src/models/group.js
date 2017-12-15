import Utils from '../utils'

class GroupModel {
  constructor(name) {
    this.id = Utils.guid()
    this.name = name
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

export default GroupModel
