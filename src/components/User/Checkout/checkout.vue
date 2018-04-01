<template>
  <div id="app">
    <v-container id="container" text-xs-center wrap>
        <v-layout row wrap id="parentLayout">
          <!-- The left side that will contain package related information -->
            <v-flex lg3 offset-lg3 md3 offset-md3 sm3 offset-sm3 xs12 id="left" elevation-5>
                <v-card>
                  <v-flex id="cardImage">
                    <v-card-media>
                      <i class="fab fa-apple fa-2x"></i>
                    </v-card-media>
                  </v-flex>
                  
                  <v-card-title id="leftTitle">
                    {{name}}
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
              <v-flex lg6 md6 sm6 xs12 id="right" elevation-5>
                <v-layout row wrap>
                  <v-flex lg12 md12 sm12 xs12>
                    <v-card id="rightCard1" flat>
                      <v-card-title id="rightTitle">
                        Instructions
                      </v-card-title>
                      <v-card-text id="rightInstructText" v-for="instruct in instructions" v-bind:key="instruct.index">
                        <i class="fas fa-caret-right fa-1x"></i>{{ instruct.ins }}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>

                <v-layout row wrap>
                  <v-flex sm8 offset-sm2 id="rightCard2" mt-3>
                    <v-card>
                      <v-card-text id="rightUserCredentials">
                        <p class="text-xs-center">myemail@somemail.com</p>
                        <span class="text-xs-center">myName Surname</span>
                    </v-card-text>
                      <v-flex id="rightCheck" pt-3>
                        <v-btn bottom mt-5 class="button" depressed type="submit" @click="submit">PROCEED</v-btn>
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
#cardImage{
  background-color: #f0f0f0;
}
.card__media{
  display: inline-flex;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f0f0f0;
}
#leftTitle{
  font-size: 20px;
  border-top: lightgray solid 1px;
  border-bottom: lightgray solid 1px; 
  justify-content: center;
}
.list{
  border-bottom: solid lightgray 1px;
  padding-bottom: 0px;
  padding-top: 16px;
  background-color: #f0f0f0;
}
.list__tile__content{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.list__tile__action-text{
  color: black;
  font-size: 14px;
}
#leftPrice{
  font-size: 23px;
  justify-content: center;
}
#right{
  border: lightgrey solid 1px;
  background-color: #f0f0f0;
}
#rightTitle{
  font-size: 26px;
  color: white;
  justify-content: center;
  background-color: #48AAE6;
}
#rightInstructText{
  padding-bottom: 8px;
  color: black;
  padding-top: 8px;
  font-size: 14px;
  padding-left: 5%;
  padding-right: 5%;
}
#rightCard2{
  border: solid lightgray 1px;
  background-color: white;
  border: solid deepskyblue 1px;
  border-radius: 8px;
}
.button{
  border-radius: 6px;
  border: deepskyblue solid 2px;
  color: deepskyblue;
}
.button:hover{
  border-radius: 6px;
  background-color: deepskyblue;
  color: white;
}
@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    #checkoutCard {
        margin-top: 0px;
    }
}
</style>