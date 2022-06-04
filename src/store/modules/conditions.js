const state = () => ({
  conditions: [
    {
      name: 'M',
      value: 0,
      color: 'blue darken-4'
    },{
      name: 'NM',
      value: 1,
      color: 'blue darken-3'
    },{
      name: 'VG+',
      value: 2,
      color: 'green darken-3'
    },{
      name: 'VG',
      value: 3,
      color: 'light-green darken-2'
    },{
      name: 'G+',
      value: 4,
      color: 'yellow darken-1'
    },{
      name: 'G',
      value: 5,
      color: 'amber darken-4'
    },{
      name: 'P',
      value: 6,
      color: 'red accent-4'
    }
  ],
  color: ''
})

const mutations = {
  getColor(state, condition) {
    state.conditions.find(c => {
      if(c.name === condition) {
        state.color = c.color
      }
    })
  }
}

const actions = {

}

export default {
  namespaced: true,
  state, actions, mutations
}
