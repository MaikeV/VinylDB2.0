const state = () => ({
  dialog: false
})

const mutations = {
  switch(state) {
      state.dialog = !state.dialog
  }
}

const actions = {

}

export default {
  namespaced: true,
  state, actions, mutations
}
