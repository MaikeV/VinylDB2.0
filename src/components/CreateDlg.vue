<template>
  <v-row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="1500px">
      <template>
        <v-card>
          <v-toolbar color="primary" dark>{{ formTitle }}</v-toolbar>
          <v-card-text>
            <div>
              <v-form>
                <v-container>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="editedItem.artist" :counter="100" label="Artist" required></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.title" :counter="100" label="Title" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="editedItem.color" :counter="100" label="Color"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.label" :counter="100" label="Label"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="editedItem.country" :counter="100" label="Country"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.released" :counter="4" label="Released" type="number"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field v-model="editedItem.value" :counter="10" label="Value" type="number"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="editedItem.tags" :counter="500" label="Tags"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-select
                        v-model="editedItem.conditionLP"
                        :items="conditions"
                        item-text="name"
                        label="Condition LP">
                      </v-select>
                    </v-col>
                    <v-col>
                      <v-select
                        v-model="editedItem.conditionCover"
                        :items="conditions"
                        item-text="name"
                        label="Condition Cover">
                      </v-select>
                    </v-col>
                    <v-col>
                      <v-checkbox v-model="editedItem.gatefold" label="Gatefold?"></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox v-model="editedItem.pictureDisc" label="Picture Disc?"></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row class="mt-0">
                    <v-col class="d-flex justify-end">
                      <v-btn color="primary" @click="save" class="mr-2">Save</v-btn>
                      <v-btn @click="switchDialog">Close</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-row>
</template>

<script>
  import store from '../store'

  export default {
    name: "CreateDlg",
    computed: {
      dialog() {
        return store.state.misc.dialog
      },
      conditions() {
        return store.state.conditions.conditions
      },
      formTitle () {
        return store.state.misc.editedIndex === -1 ? 'New Entry' : 'Edit Entry'
      },
      editedItem() {
        return store.state.misc.editedItem
      }
    },
    methods: {
      switchDialog() {
        store.commit('misc/switch')
      },
      save() {
        if (store.state.misc.editedIndex > -1) {
          store.dispatch('misc/save')
        } else {
          store.commit('albums/addEntry', store.state.misc.editedItem)
        }

        store.commit('misc/resetEditedItemAndIndex')
        store.commit('misc/closeDialog')
      },
      close() {
        store.commit('misc/resetEditedItemAndIndex')
        console.log(store.state.misc.editedItem);
        console.log(store.state.misc.editedIndex);
        store.commit('misc/closeDialog')
      }
    },
    data() {
      return {

      }
    }
  }
</script>
