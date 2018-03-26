<template>
<div class="main">
  <v-app>
  
    <!-- Jumbotron Starts -->
    <v-jumbotron 
    src="https://hdqwalls.com/download/material-design-social-1326x557.jpg"
    :gradient="gradient"
    height="628px">
      <v-container fluid>
        <v-layout row-wrap>
          <v-flex lg12 md12 sm12 xs12 text-xs-center>
          </v-flex>
        </v-layout>
      </v-container> 
    </v-jumbotron>
  <!-- Jumbotron Ends -->

    <!-- <v-content> -->
      <v-container class="parentContainer" text-xs-center wrap grid-list-lg>
        <v-layout id="parentLayout" row wrap>
            <!-- Card1 Primary -->
             
              <v-flex id="basic" lg3 offset-lg3 md3 offset-md3 sm3 offset-sm3 xs12>
                <v-card flat>
                  <v-card-media>
                    <i class="fas fa-bicycle fa-3x"></i>
                  </v-card-media>
                  <v-card-title class="packName">
                    <span>PRIMARY</span>
                  </v-card-title>
                  <v-card-title primary-title class="priceName">
                    <span>$ 29.99</span>
                  </v-card-title>
                  <hr class="priceDivider">
                  <v-list class="featLists">
                    <v-list-tile v-for="basic in basics" :key="basic.id">
                      <v-list-tile-content>
                        <v-list-tile-text>
                          {{ basic.feature }}
                        </v-list-tile-text>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                      <v-flex class="buyButton">
                        <v-btn color="blue lighten-1">BUY NOW</v-btn>
                      </v-flex>
                </v-card>
              </v-flex>
             
            <!-- Card2 Extended -->
            
              <v-flex id="extended" lg3 md3 sm3 xs12>
                <v-card flat>
                  <v-card-media>
                    <i class="fas fa-car fa-3x"></i>
                  </v-card-media>
                  <v-card-title class="packName">
                    <span>EXTENDED</span>
                  </v-card-title>
                  <v-card-title primary-title class="priceName">
                    <span>$ 59.99</span>
                  </v-card-title>
                  <hr class="priceDivider">
                  <v-list class="featLists">
                    <v-list-tile v-for="extend in extended" :key="extend.id">
                      <v-list-tile-content>
                        <v-list-tile-text>
                          {{ extend.feature }}
                        </v-list-tile-text>
                      </v-list-tile-content>
                    </v-list-tile>  
                  </v-list>
                      <v-flex class="buyButton">
                        <v-btn color="blue lighten-1">BUY NOW</v-btn>
                      </v-flex>
                </v-card>
              </v-flex>
             
            <!-- Card3 Premium -->
             
              <v-flex id="premium" lg3 md3 sm3 xs12>
                <v-card flat>
                  <v-card-media>
                    <i class="fas fa-fighter-jet fa-3x"></i>
                  </v-card-media>
                  <v-card-title class="packName">
                    <span>PREMIUM</span>
                  </v-card-title>
                  <v-card-title primary-title class="priceName">
                    <span>$ 79.99</span>
                  </v-card-title>
                  <hr class="priceDivider">
                  <v-list class="featLists">
                    <v-list-tile v-for="prem in premium" :key="prem.id">
                      <v-list-tile-content>
                        <v-list-tile-text>
                          {{ prem.feature }}
                        </v-list-tile-text>
                      </v-list-tile-content>
                    </v-list-tile>  
                  </v-list>
                      <v-flex class="buyButton">
                        <v-btn color="blue lighten-1">BUY NOW</v-btn>
                      </v-flex>
                </v-card>
              </v-flex>
        </v-layout>
      </v-container>
    <!-- </v-content>  -->
       
  </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
       
      basics: [
        {feature: 'First Feature'},
        {feature: 'Second Feature'},
        {feature: 'Third Feature'},
        {feature: 'Fourth Feature'},
        {feature: 'Fifth  Feature'},
        {feature: 'Sixth Feature'},
        {feature: '-'},
        {feature: '-'},
        {feature: '-'},
        {feature: '-'}
      ],
    
    extended: [
      {feature: 'First Feature'},
      {feature: 'Second Feature'},
      {feature: 'Third Feature'},
      {feature: 'Fourth Feature'},
      {feature: 'Fifth  Feature'},
      {feature: 'Sixth  Feature'},
      {feature: 'Seventh Feature'},
      {feature: 'Eighth Feature'},
      {feature: '-'},
      {feature: '-'}
    ],
    
    premium: [
      {feature: 'First Feature'},
      {feature: 'Second Feature'},
      {feature: 'Third Feature'},
      {feature: 'Fourth Feature'},
      {feature: 'Fifth  Feature'},
      {feature: 'Sixth  Feature'},
      {feature: 'Seventh Feature'},
      {feature: 'Eighth Feature'},
      {feature: 'Ninth Feature'},
      {feature: 'Tenth Feature'}
    ],
  })
  }
</script>

<style scoped>
.parentContainer{
  position: absolute;
  z-index: 990;
}
.card{
  border-radius: 8px;
  border: solid black 1px;
}
.card__media{
  padding: 0px;
  margin-top: 7%;
  display: inline-flex;
}
.packName{
  padding: 0px;
  font-size: 22px;
  justify-content: center;
  margin-top: -2%;
  border-bottom: solid black 1px;
}
.priceName{
  font-size: 22px;
  justify-content: center;
}
.priceDivider{
  width: 60%;
  margin-left: 20%;
  border-top: solid black 3px;
}
@media only screen and (max-width: 600px) {
    /* For mobile phones: */
    [class*="packName"] {
        font-size: 30px;
    }
    [class*="priceName"] {
        font-size: 30px;
    }
}

@media only screen and ( max-width: 964px) {
    /* For mobile phones: */
    [class*="packName"] {
        font-size:23px;
    }
    [class*="priceName"] {
        font-size: 26px;
    }
}

@media only screen and ( min-width: 1264px) {
    /* For mobile phones: */
    [class*="packName"] {
        font-size:25px;
    }
    [class*="priceName"] {
        font-size: 28px;
    }
}

@media only screen and (min-width: 965px) {
    /* For mobile phones: */
    [class*="packName"] {
        font-size:24px;
    }
    [class*="priceName"] {
        font-size: 24px;
    }
}

/* This is for the responsiveness of the card container */
@media only screen and (max-width: 600px){
  /* For mobile phones */
  [class*="parentContainer"] {
    margin-top: 79.5%;
  }
}

@media only screen and (min-width: 601px){
  /* For mobile phones */
  [class*="parentContainer"] {
    margin-top: 47.5%;
  }
}

@media only screen and (min-width: 961px){
  /* For mobile phones */
  [class*="parentContainer"] {
    margin-top: 38.6%;
  }
}

@media only screen and (min-width: 1265px){
  /* For mobile phones */
  [class*="parentContainer"] {
    margin-top: 30.8%;
    margin-left: 10%;
  }
}

</style>
