<template>
  <v-row>
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="600px">
      <template>
        <v-card>
          <v-toolbar v-if="isEdit" color="primary" dark>Edit Entry</v-toolbar>
          <v-toolbar v-else color="primary" dark>New Entry</v-toolbar>
          <v-card-text>
            <div>
              <v-form>
                <v-container>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="artist" :counter="100" label="Artist" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="title" :counter="100" label="Title" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="color" :counter="100" label="Color"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="label" :counter="100" label="Label"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="country" :counter="100" label="Country"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="released" :counter="4" label="Released" type="number"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="value" :counter="10" label="Value" type="number"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-text-field v-model="tags" :counter="500" label="Tags"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-select
                        v-model="conditionLP"
                        :items="conditions"
                        label="Condition LP">
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-select
                        v-model="conditionCover"
                        :items="conditions"
                        label="Condition Cover">
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row class="">
                    <v-col>
                      <v-checkbox v-model="gatefold" label="Gatefold?"></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox v-model="pictureDisc" label="Picture Disc?"></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-row class="mt-0">
                    <v-col class="d-flex justify-end">
                      <v-btn color="primary" @click="addEntry" class="mr-2">Save</v-btn>
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
    name: "ModuleDialog",
    computed: {
      dialog() {
        return store.state.misc.dialog
      }
    },
    methods: {
      switchDialog() {
        store.commit('misc/switch')
      }
    },
    data() {
      return {
        conditions: ['M', 'NM', 'VG+', 'VG', 'G+', 'G', 'P']
      }
    }
  }
</script>
