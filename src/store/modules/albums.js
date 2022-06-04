const state = () => ({
  headers: [
    { text: 'Artist', value: 'artist', align: 'start' },
    { text: 'Title', value: 'title' },
    { text: 'Gatefold', value: 'gatefold', filterable: false},
    { text: 'Color', value: 'color', filterable: false },
    { text: 'Picture Disc', value: 'pictureDisc', filterable: false },
    { text: 'Label', value: 'label' },
    { text: 'Country', value: 'country' },
    { text: 'Released', value: 'released' },
    { text: 'Condition LP', value: 'conditionLP', filterable: false },
    { text: 'Condition Cover', value: 'conditionCover', filterable: false },
    { text: 'Value', value: 'value', filterable: false },
    { text: 'Tags', value: 'tags' },
    { text: 'Actions', value: 'actions', filterable: false},
  ],
  albums: [
    {
      artist: 'Sabaton',
      title: 'The War to End All Wars',
      gatefold: true,
      color: 'Fluorescent Orange',
      pictureDisc: false,
      label: 'NB 6307-1',
      country: 'Germany',
      released: 2022,
      conditionLP: 'NM',
      conditionCover: 'NM',
      value: '',
      tags: [
        'Misspress',
        'Limited to 500'
      ],
    },
    {
      artist: 'AC/DC',
      title: 'Fly On the Wall',
      gatefold: false,
      color: 'Black',
      pictureDisc: false,
      label: '781 263-1',
      country: 'Euope',
      released: 1985,
      conditionLP: 'G+',
      conditionCover: 'G',
      value: '',
      tags: [],
    },
    {
      artist: 'Anthrax',
      title: 'Armed and Dangerous',
      gatefold: false,
      color: '',
      pictureDisc: true,
      label: 'MRS-05',
      country: 'UK',
      released: 1985,
      conditionLP: 'VG',
      conditionCover: '',
      value: '',
      tags: [
        'Limited',
        'Numbered (0647)'
      ],
    },
    {
      artist: 'Anthrax',
      title: 'Bring the Noise',
      gatefold: false,
      color: 'Black',
      pictureDisc: false,
      label: '12 IS 490, 868 611-1',
      country: 'UK',
      released: 1991,
      conditionLP: 'VG+',
      conditionCover: 'VG+',
      value: '',
      tags: [],
    },
  ],
})

const mutations = {
  addEntry(state, newEntry) {
    state.albums = state.albums.push(newEntry)
  }
}

const actions = {
  // getEntry({rootState, commit}, entry) {
  //   commit('misc/editEntry', rootState.albums.albums.indexOf(entry), entry)
  // }
}

export default {
  namespaced: true,
  state, actions, mutations
}
