<template>
<v-container fluid>

  
  <v-parallax
  src="/static/doc-images/features.jpeg">
  <v-layout row align-center justify-center>

  </v-layout>
  </v-parallax>
  


             <v-layout row wrap pt-4>
        <v-flex xs12 text-xs-center>
            <h1>
             {{heading_for_whyus}} 
            </h1>
        </v-flex>
      </v-layout>           
      <v-layout row wrap>

        <v-flex xs12 lg4 mt-4>
           <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div  mt-2>
                <h2 class="text-xs-center">{{whyus1}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag1}}</p>
            </div>
        </v-flex>
        <v-flex xs12 lg4 mt-4>
            <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div>
                <h2 class="text-xs-center">{{whyus2}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag2}}</p>
            </div>
        </v-flex>
        <v-flex xs12 lg4 mt-4>
            <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div>
                <h2 class="text-xs-center">{{whyus3}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag3}}</p>
            </div>
        </v-flex>
     </v-layout>



               <v-layout row wrap pt-4>
        <v-flex xs12 text-xs-center>
            <h1>
             {{heading_for_whyus}} 
            </h1>
        </v-flex>
      </v-layout>           
      <v-layout row wrap>

        <v-flex xs12 lg4 mt-4>
           <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div  mt-2>
                <h2 class="text-xs-center">{{whyus1}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag1}}</p>
            </div>
        </v-flex>
        <v-flex xs12 lg4 mt-4>
            <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div>
                <h2 class="text-xs-center">{{whyus2}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag2}}</p>
            </div>
        </v-flex>
        <v-flex xs12 lg4 mt-4>
            <div class="div">
              <div class="outer">
                 <div class="inner">
                    <div class="image-div">
                       <img  class="image" :src="image" alt="">
                    </div> 
                 </div>
              </div>
            </div>
            <div>
                <h2 class="text-xs-center">{{whyus3}}</h2>
            </div>
            <div>
                <p class="text-xs-center p-whyustag">{{whyustag3}}</p>
            </div>
        </v-flex>
     </v-layout>



      <!-- footer -->
      <v-layout pt-4>
      <v-footer height="auto">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
 </v-layout>

             

</v-container>


            

</template>


<script>
export default {
  data: () => ({
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      image:'https://s3.eu-west-1.amazonaws.com/images.assets-landingi.com/MUE2gcKh9Y6Mamy4/growing-plant.png',
      // heading_for_whyus:'What w',
      whyus1:'Reliable',
      whyustag1:'Interoperable ',
      whyus2:'Fast',
      whyustag2:'Scalable',
      whyus3:'Seamless',
      whyustag3:'Speed',
    })
      // beforeRouteLeave (to, from , next) {
      //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      //   if (answer) next(); else next(false);
      // }
  }

</script>

<style scoped>

/* main cards */
/*Basic Styling of Card*/
body{
  background-color:#F0F0F0;
}
.div{
  position:relative;
  height:240px;
  width:240px;
  background-color:transparent;
  margin:auto; /*remove this particular styling if necessary */
  margin-top:10px; /*remove this particular styling if necessary */
}
.outer{
  height:240px;
  width:240px;
  background-color: #F8F8F8;
  border:none;
  color:red;
  border-radius:120px;
  position:absolute;
}
.inner{
  height:165px;
  width:165px;
  border-radius:120px;
  background-color:white;
  position:absolute;
  top:38.5px;
  left:38.5px;
  display:block;
  box-shadow:1px 1px 50px rgba(0,0,0,0.1);
}
.image-div{
  height:78px;
  width:78px;
  background-color:white;
  position:absolute;
  top:42px;
  left:42px;

}
.image{
  width:100%;
  height:100%;
  display:block;
}
.inner:hover{
  box-shadow:1px 1px 50px rgba(0,0,0,0.2);
}

/* picture cards */

.card1{
/*   border: solid black 2px; */
  /* border-radius: 12px; */
  width: 80%;
  text-align: center;
}
.card__media1{
/*   border: solid black 2px; */
  margin-top: -20px;
  margin-left: -10px;
}
.card__title1{
  margin-left: 20%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-weight: 600;
}
.card__text1{
  font-family: 'Gorditas', cursive;
  font-size: 14px;
}
</style>

