<template>
  <div id="app">
    <v-container id="container" text-xs-center wrap>
        <v-layout row wrap id="parentLayout">
          <!-- The left side that will contain package related information -->
            <v-flex lg3 offset-lg3 md3 offset-md3 sm3 offset-sm3 xs12 id="left">
                <v-card flat>
                  <v-card-media>
                    <i class="fab fa-apple fa-7x"></i>
                  </v-card-media>
                  <v-card-title id="leftTitle">
                    {{ name }}
                  </v-card-title>
                  <v-list>
                    <v-list-tile v-for="item in items" :key="item.index">
                      <v-list-tile-content>
                        <v-list-tile-action-text>
                          <span class="text-xs-center">{{ item.feature }}</span>
                        </v-list-tile-action-text>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-card-title id="leftPrice">
                    Price: ₹849
                  </v-card-title>
                </v-card>            
              </v-flex>
              <!-- The Right Side will contain regarding InstaMojo and the 2 pre-filled info , checkbox and button -->
              <v-flex lg6 md6 sm6 xs12 id="right">
                <v-layout row wrap>
                  <v-flex lg12 md12 sm12 xs12>
                    <v-card id="rightCard1" flat>
                      <v-card-title id="rightTitle">
                        Instructions
                      </v-card-title>
                      <v-card-text id="rightInstructText">
                        <ul v-for="instruct in instructions" v-bind:key="instruct.index">
                          <li>{{ instruct.ins }}</li><br>
                        </ul> 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex sm8 offset-sm2 id="rightCard2" mt-1>
                    <v-card flat>
                      <v-card-text id="rightUserCredentials">
                        <p class="text-xs-center">myemail@somemail.com</p>
                        <p class="text-xs-center">myName Surname</p>
                    </v-card-text>
                      <v-flex id="rightCheck" mb-2>
                        <v-btn class="button"   grey lighten-2 depressed type="submit" @click="submit" large>PROCEED</v-btn>
                      </v-flex>    
                    </v-card>  
                  </v-flex>
                </v-layout>
              </v-flex>
              
        </v-layout>
      </v-container>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'checkout',
  data: () => ({
    items: [
      {feature: 'First Feature'},
      {feature: 'Second Feature'},
      {feature: 'Third Feature'},
      {feature: 'Fourth Feature'},
      {feature: 'Fifth Feature'},
      {feature: 'Sixth Feature'}
    ],
    errors: [],
    instructions: [
      {ins: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, ullam officia harum omnis nemo in enim sit.'},
      {ins: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, ullam officia harum omnis nemo in enim sit.'},
      {ins: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, ullam officia harum omnis nemo in enim sit.'},
      {ins: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta, ullam officia harum omnis nemo in enim sit.'}
    ]
  }),

  methods:{
    submit: function(){
      axios.post(`http://jsonplaceholder.typicode.com/posts`,{
         'name':this.$store.state.name,
         'jwt' : localStorage.jwt
      })

      .then(response => {
          console.log(response)
      })

      .catch (e => {

      })
    }
  }, 

  computed: {
      name() {
          return this.$store.state.name

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#parentLayout{
  font-family: 'Open Sans', arial, Verdana, Tahoma, sans-serif;
}
#left{
  border: lightgray solid 1px; 
}
.card__media{
  display: inline-flex;
}
#leftTitle{
  font-size: 34px;
  border-top: lightgray solid 1px;
  border-bottom: lightgray solid 1px; 
  justify-content: center;
}
.list{
  border-bottom: solid lightgray 1px;
  padding-bottom: 0px;
}
.list__tile__content{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.list__tile__action-text{
  color: black;
  font-size: 16px;
}
#leftPrice{
  font-size: 34px;
  justify-content: center;
}
#right{
  border: lightgrey solid 1px;
}
#rightTitle{
  font-size: 30px;
  justify-content: center;
  background-color: #E0E0E0;
}
#rightInstructText{
  font-size: 14px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 4%;
}
#rightCard2{
  border: solid lightgray 1px;
}
.button{
  border-radius: 6px;
}
@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    #checkoutCard {
        margin-top: 0px;
    }
}
</style>