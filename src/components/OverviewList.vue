<template>
  <v-container fluid class="content">
    <v-row class="text-center">
      <v-col cols="12">
        <v-card class="ma-2">
          <v-card-title>Collection
            <v-btn class="ml-5" color="primary" @click="openDialog()">New Entry</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="albums" :search="search">
            <template v-slot:item.gatefold="{ item }">
              <v-icon v-if="item.gatefold">mdi-check-bold</v-icon>
              <v-icon v-else>mdi-close-thick</v-icon>
            </template>
            <template v-slot:item.pictureDisc="{ item }">
              <v-icon v-if="item.pictureDisc">mdi-check-bold</v-icon>
              <v-icon v-else>mdi-close-thick</v-icon>
            </template>
            <template v-slot:item.conditionLP="{ item }">
              <v-chip v-show="item.conditionLP" :color="getColor(item.conditionLP)" dark>{{ item.conditionLP }}</v-chip>
            </template>
            <template v-slot:item.conditionCover="{ item }">
              <v-chip v-show="item.conditionCover" :color="getColor(item.conditionCover)" dark>{{ item.conditionCover }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-btn small fab class="mr-2" @click="editEntry(item)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn small fab @click="deleteItem(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <CreateDlg/>
  </v-container>
</template>

<script>
  import store from '../store';
  import CreateDlg from './CreateDlg';

  export default {
    methods: {
      switchDialog() {
        store.commit('misc/switch')
      },
      closeDialog() {
        store.commit('misc/closeDialog')
      },
      openDialog() {
        store.commit('misc/openDialog')
      },
      // getColor (condition) {
      //   store.commit('conditions/getColor', condition)
      //
      //   return store.state.conditions.color
      // },
      getColor(condition) {
        var color = 'grey'

        store.state.conditions.conditions.find(c => {
          if(c.name === condition)
            color = c.color
        })

        return color
      },
      editEntry (entry) {
        var index = store.state.albums.albums.indexOf(entry)
        var e = store.state.albums.albums.at(index)

        store.commit('misc/setEditedEntry', e)
        store.commit('misc/setEditedIndex', index)
        store.commit('misc/openDialog')
      },
    },
    components: {
      CreateDlg
    },
    computed: {
      headers() {
        return store.state.albums.headers
      },
      albums() {
        return store.state.albums.albums
      }
    },
    data: () => ({
      search: '',
    }),
  }
</script>
