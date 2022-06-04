const state = () => ({
  dialog: false,
  editedIndex: -1,
  editedItem: {
    artist: '',
    title: '',
    gatefold: '',
    color: '',
    pictureDisc: '',
    label: '',
    country: '',
    released: '',
    conditionLP: '',
    conditionCover: '',
    value: '',
    tags: [],
  },
  defaultItem: {
    artist: '',
    title: '',
    gatefold: '',
    color: '',
    pictureDisc: '',
    label: '',
    country: '',
    released: '',
    conditionLP: '',
    conditionCover: '',
    value: '',
    tags: [],
  },
})

const mutations = {
  switch(state) {
    state.dialog = !state.dialog
  },
  setEditedEntry(state, entry) {
    state.editedItem = Object.assign({}, entry)
  },
  setEditedIndex(state, index) {
    state.editedIndex = index
  },
  resetEditedItemAndIndex(state) {
    state.editedIndex = -1
    state.editedItem = Object.assign({}, state.defaultItem)
  },
  closeDialog(state) {
    state.dialog = false
  },
  openDialog(state) {
    state.dialog = true
  }
}

const actions = {
  save() {
    //TODO
  }
}

export default {
  namespaced: true,
  state, actions, mutations
}
