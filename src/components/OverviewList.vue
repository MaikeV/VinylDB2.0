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
            <template v-slot:item.actions="{ item }">
              <v-btn small fab class="mr-2" @click="editItem(item)">
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
      openDialog() {
        store.commit('misc/switch')
      }
    },
    components: {
      CreateDlg
    },
    data: () => ({
      search: '',
      headers: [
        { text: 'Artist', value: 'artist', align: 'start'},
        { text: 'Title', value: 'title' },
        { text: 'Gatefold', value: 'gatefold' },
        { text: 'Color', value: 'color' },
        { text: 'Picture Disc', value: 'pictureDisc' },
        { text: 'Label', value: 'label' },
        { text: 'Country', value: 'country' },
        { text: 'Released', value: 'released' },
        { text: 'Condition LP', value: 'conditionLP' },
        { text: 'Condition Cover', value: 'conditionCover' },
        { text: 'Value', value: 'value' },
        { text: 'Tags', value: 'tags' },
        { text: 'Actions', value: 'actions'},
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
    }),
  }
</script>
