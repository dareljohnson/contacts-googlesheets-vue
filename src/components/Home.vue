<template>
  <v-container>
      <v-layout row wrap class="mb-2">
          <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <p>Flex box</p>
          </v-flex>
      </v-layout>
      <v-layout v-if="loading">
          <v-flex xs12 class="text-xs-center">
              <v-progress-circular 
                    indeterminate 
                    class="primary--text" 
                    :width="7" 
                    :size="70" 
                    ></v-progress-circular>
          </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2" v-else>
          <v-flex xs12>
             <v-data-table
                :headers="headers"
                :pagination.sync="pagination"
                :items="contacts"
                hide-actions
                class="elevation-1"
                :loading="loading"
                >
                    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-middle">{{ props.item.ID }}</td>
                        <td class="text-xs-middle">{{ props.item.First_Name }}</td>
                        <td class="text-xs-middle">{{ props.item.Last_Name }}</td>
                    </template>
                    <template slot="no-data">
                        <v-alert :value="true" color="error" icon="warning">
                            Sorry, nothing to display here :(
                        </v-alert>
                    </template>
              </v-data-table>
              <div class="text-xs-center pt-2">
                 <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
              </div>
          </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
          <v-flex xs12>
              <p class="text-xs-center">Add your name to the list!</p>
          </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
            <form @submit.prevent="onCreateContact">
                <v-layout col>
                    <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                        label="First Name"
                        name="first_name"
                        id="first_name"
                        v-model="first_name"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout col>
                    <v-flex xs12 sm6 offset-sm3>      
                        <v-text-field
                        label="Last Name"
                        name="last_name"
                        id="last_name"
                        v-model="last_name"
                        ></v-text-field>
                    </v-flex>
                </v-layout>      
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>      
                        <v-btn class="primary" 
                            :disabled="!formIsValid"
                            type="submit">Create Contact</v-btn>
                    </v-flex>
                </v-layout>
            </form>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import guid8 from '../filters/uuid8'

export default {
      data () {
          return {
              headers: [
                  {
                  text: 'Id',
                  align: 'left',
                  sortable: false,
                  value: 'name'
                  },
                  {
                  text: 'First Name',
                  align: 'left',
                  sortable: false,
                  value: 'name'
                  },
                  {
                  text: 'Last Name',
                  align: 'left',
                  sortable: false,
                  value: 'name'
                  }
              ],
              pagination: {},
              id: null,
              first_name:'',
              last_name:''
          }
      },
      computed:{
        // get Contacts for Data Table
        contacts (){
            return this.$store.getters.loadedContacts
        },
        pages () {
            if (this.pagination.rowsPerPage == null ||
            this.pagination.totalItems == null
            ) return 0

            return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        },
        formIsValid () {
            return this.first_name !== '' && this.last_name !== '' 
        },
        loading (){
            return this.$store.getters.loading
        } 
      },
      methods: {
        onCreateContact (){
              if(!this.formIsValid){
                return
              }

              const contactData = {
                    id: guid8(),
                    first_name: this.first_name.trim(),   
                    last_name: this.last_name.trim()
              }
              this.$store.dispatch('createContact', contactData)
          }
      }
}
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color:rgb(0,0,0, 0.5);
    color:white;
    font-size: 2em;
    padding: 20px;
}
[v-cloak] { 
  display: none; 
}
</style>