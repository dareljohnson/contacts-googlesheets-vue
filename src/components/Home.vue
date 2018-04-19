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
              <p>Flex box</p>
          </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
          <v-flex xs12>
              <p class="text-xs-center">Add your name to the list!</p>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
      computed:{
        /* // get featured meetups for Carousel
        meetups (){
            return this.$store.getters.featuredMeetups
        },*/
        loading (){
            //return this.$store.getters.loading
        } 
      },
      methods: {
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