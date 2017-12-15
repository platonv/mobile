import Realm from 'realm'
import GroupModel from '../models/group'

let repository = new Realm({
  schema: [
    {
      name: 'Group',
      primaryKey: 'id',
      properties: {
        id: { type: 'string', indexed: true },
        name: 'string',
        createdAt: 'date',
        updatedAt: 'date',
      },
    },
  ],
})

let GroupService = {
  findAll: function() {
    return repository.objects('Group')
  },

  save: function(group) {
    if (
      repository.objects('Group').filtered("name = '" + group.name + "'").length
    )
      return

    repository.write(() => {
      group.updatedAt = new Date()
      repository.create('Group', group)
    })
  },

  update: function(group, callback) {
    if (!callback) return
    repository.write(() => {
      callback()
      group.updatedAt = new Date()
    })
  },

  delete: function(group) {
    repository.write(() => {
      repository.delete(group)
    })
  },
}

export default GroupService
