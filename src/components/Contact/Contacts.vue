<template>
  <v-container>
    <v-layout row wrap v-if="loading">
          <v-flex xs12 class="text-xs-center">
              <v-progress-circular 
                    indeterminate 
                    class="primary--text" 
                    :width="7" 
                    :size="70" 
                    ></v-progress-circular>
          </v-flex>
     </v-layout>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
         <p>Flex box</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed:{
      /* // get all meetups
      meetups () {
        return this.$store.getters.loadedMeetups
      },*/
      loading () {
          //return this.$store.getters.loading
      } 
    }
  }
</script>

<style>
    [v-cloak] { 
        display: none; 
    }
</style>
