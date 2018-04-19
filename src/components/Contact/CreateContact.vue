<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="secondary--text">Create a new Contact</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form >
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                  label="First Name"
                  name="first_name"
                  id="first_name"
                  v-model="first_name"
                  :rules="nameRules"
                  :counter="30"
                  required
                ></v-text-field>
              </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>      
                <v-text-field
                  label="Last Name"
                  name="last_name"
                  id="last_name"
                  v-model="last_name"
                  :rules="nameRules"
                  :counter="30"
                  required
                ></v-text-field>
            </v-flex>
          </v-layout>      
          <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>           
                <v-text-field
                  label="Email Address"
                  name="email_address"
                  id="email_address"
                  v-model="email_address"
                  required
                ></v-text-field>
            </v-flex>
          </v-layout>     
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>      
                <v-text-field
                  label="Phone Number"
                  name="phone_number"
                  id="phone_number"
                  v-model="phone_number"
                  required
                ></v-text-field>
           </v-flex>
          </v-layout>     
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>      
                <v-btn class="primary" 
                    :disabled="!formIsValid"
                    type="submit">Create Contact</v-btn>

                    <!-- {{ submittableDateTime }} -->
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        first_name:'',
        last_name:'',
        email_address:'',
        phone_number:'',
        nameRules: [
          v => !!v || 'This is required',
          v => v.length <= 50 || 'Name must be less than 50 characters'
        ],
        date: '',
        time: new Date(),
        image: null
      }
    },
    computed:{
       formIsValid () {
        return this.title !== '' && 
               this.location !== '' && 
               this.imageURL !== '' && 
               this.description !== ''
      },
      /*
      submittableDateTime () {
        const date = new Date(this.date)
        if(typeof this.time === 'string'){
          let hours = this.time.match(/^(\d+)/)[1]
          let minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
          //console.log("Date text " + date)
        }else{
            date.setHours(this.time.getHours())
            date.setMinutes(this.time.getMinutes())
            //console.log("Date obj " + date)
        }
        
        return date
      } */
    },
    methods:{
      /* onCreateMeetup (){
        if(!this.formIsValid){
          return
        }
        if(!this.image){
          return
        }
        const meetupData = {
          title: this.title.trim(),
          location: this.location.trim(),
          //imageURL: this.imageURL,
          image: this.image,
          description: this.description.trim(),
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      },
      onPickFile (){
        this.$refs.fileInput.click()
      },
      onFilePicked (event){
        const files = event.target.files
        let filename = files[0].name
        if(filename.lastIndexOf('.') <= 0){
          return alert('Please add a valid file!')
        }
        // convert binary to string
        const fileReader = new FileReader()
        fileReader.addEventListener('load', ()=>{
          this.imageURL = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }*/
    } 
  }
</script>