<template>
  <v-app style>
           
        
          <v-jumbotron src="https://hdqwalls.com/download/material-design-social-1326x557.jpg" height="500px"></v-jumbotron>

      
  <!-- WHY US STARTING -->

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

     <hr class="divider1">

<!-- What We Provide -->
    <div flat class="blue-grey lighten-3" style="margin-top:35px">
    <v-layout row wrap pt-4>
     <v-flex xs12>
       <h1 class="text-xs-center">What We Provide</h1>
     </v-flex>
    </v-layout>
    <v-layout row wrap pt-3>
      <v-flex xs12 pl-3 pr-3>
       <p class="text-xs-center" >Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. 
        Harum maiores modi quidem veniam, 
        expedita quis laboriosam, 
        ullam facere adipisci, iusto, voluptate 
        sapiente corrupti asperiores 
        rem nemo numquam fuga ab at.
       </p>
      
     </v-flex>
    </v-layout>


    <v-layout row wrap>
      <v-flex text-xs-center class="icon" xs12>
             <v-btn fab color="red">
                 <v-icon>android</v-icon>
             </v-btn>
             <v-btn fab color="blue">
                 <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="yellow">
                <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="orange">
                 <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="pink">
                 <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="blue" class="hidden-xs-only">
                 <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="teal" class="hidden-xs-only">
                 <v-icon dark>android</v-icon>
             </v-btn>
             <v-btn fab color="indigo" class="hidden-xs-only">
                 <v-icon dark>android</v-icon>
             </v-btn>
    </v-flex>
  </v-layout>
   
   <!-- see more -->
   <v-layout row wrap pb-3>
      <v-flex text-xs-center  xs12 pt-3 pb-1>
          <router-link to="Features">
            <v-btn large class="info" depressed>See More </v-btn>
          </router-link>
      </v-flex>
   </v-layout>  
    </div>

<!-- second cards -->
<!-- 4 -->
  <hr class="divider1">
  <v-layout row wrap pt-5>
      

        <v-flex xs12 lg4>
        
          <div class="parentContainer">
              
            
            <v-card height="300px" width="400px">
              <div class="quote">
                <span style="font-size:120px;line-height:0.6em">❝</span>
              </div>
              <div class="loremText">

                <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae, soluta provident ipsum sequi mollitia aut, eveniet sunt natus itaque alias nulla nam facere quas laudantium corrupti molestias praesentium."</p>
              </div>

              <hr class="divider">

              <div class="contentContainer">
                <v-card-title>
                  <h1 align="left">Cristiano Ronaldo</h1>
                  <h3>Legend, Real Madrid</h3>
                </v-card-title>
              </div>

              <div class="mediaContainer">
                <v-card-media src="https://images.unsplash.com/photo-1440448894877-4c4fdec04f63?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7bfdb73a6d77f7e2c3e707221cc3d1d7" height="80px">
                </v-card-media>
              </div>
</v-card>
          </div>
  
</v-flex>
        <v-flex xs12 lg4>

          <div class="parentContainer">
            
            <v-card height="300px" width="400px">
              <div class="quote">
                <span style="font-size:120px;line-height:0.6em">❝</span>
              </div>
              <div class="loremText">

                <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae, soluta provident ipsum sequi mollitia aut, eveniet sunt natus itaque alias nulla nam facere quas laudantium corrupti molestias praesentium."</p>
              </div>

              <hr class="divider">

              <div class="contentContainer">
                <v-card-title>
                  <h1 align="left">Cristiano Ronaldo</h1>
                  <h3>Legend, Real Madrid</h3>
                </v-card-title>
              </div>

              <div class="mediaContainer">
                <v-card-media src="https://images.unsplash.com/photo-1440448894877-4c4fdec04f63?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7bfdb73a6d77f7e2c3e707221cc3d1d7" height="80px">
                </v-card-media>
              </div>
</v-card>
          </div>
          


</v-flex>
        <v-flex xs12 lg4>

          <div class="parentContainer">
               
            
            <v-card height="300px" width="400px">
              <div class="quote">
                <span style="font-size:120px;line-height:0.6em">❝</span>
              </div>
              <div class="loremText">

                <p>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, beatae, soluta provident ipsum sequi mollitia aut, eveniet sunt natus itaque alias nulla nam facere quas laudantium corrupti molestias praesentium."</p>
              </div>

              <hr class="divider">

              <div class="contentContainer">
                <v-card-title>
                  <h1 align="left">Cristiano Ronaldo</h1>
                  <h3>Legend, Real Madrid</h3>
                </v-card-title>
              </div>

              <div class="mediaContainer">
                <v-card-media src="https://images.unsplash.com/photo-1440448894877-4c4fdec04f63?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7bfdb73a6d77f7e2c3e707221cc3d1d7" height="80px">
                </v-card-media>
              </div>
</v-card>
          </div>
          


</v-flex>
</v-layout>
<hr class="divider1">
<!-- see more 2 -->

      <div class="indigo lighten-1 white--text" style="margin-top:25px">
        <v-layout row wrap text-xs-center pt-2>
          <v-flex xs12>
              <v-btn v-for="icon in icons" :key="icon" icon class="mx-3 white--text">
               <v-icon size="24px" >{{ icon }}</v-icon>
              </v-btn>
          </v-flex>
            
        </v-layout>    
  
        <v-layout row wrap text-xs-center pt-3> 
          <v-flex xs12 text-xs-center pl-3 pr-3>
              <span>
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </span>
          </v-flex>
        </v-layout>
              
        <v-layout row wrap text-xs-center>
           <v-flex xs12 pt-4 pb-3>
              &copy;2018 — <strong>Vuetify</strong>
           </v-flex>
        </v-layout>
                              

     </div>


<hr class="divider1">





  </v-app>
</template>

<script>
export default {
       data: () => ({
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      image:'https://s3.eu-west-1.amazonaws.com/images.assets-landingi.com/MUE2gcKh9Y6Mamy4/growing-plant.png',
      heading_for_whyus:'WHY US',
      whyus1:'purpose',
      whyustag1:'Find your dream team and exert confidence ',
      whyus2:'purpose',
      whyustag2:'Find your dream team and exert confidence',
      whyus3:'purpose',
      whyustag3:'Find your dream team and exert confidence',
    })
}
</script>


<style scoped>
body{
  background-color: #f0f0f0!important;
}
.see_more1{
  padding:70px;
  text-decoration: unset;
}
/* Parent Container Main Div Done*/
.parentContainer{
  height: 100%;
  width: 100%;
  /* padding-top:50px; */
  
  
  
  /* padding-right:800px; */
  /*border-style: solid;
  border-color: black;*/
}
/*The Card. It has a dark theme*/
.card{
  margin-left: 15px;
  /* margin:auto; */
  margin-top: 30px;
  border-radius: 8px;
  border: solid black 2px;
  
}
/*This is for the review*/
.loremText{
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  margin:auto;
  height: 200px;
  text-align: center;
}
/*This is the div for Contents*/
.contentContainer{
  float: left;
  height: 100px;
  width: 300px;
}
/*The Media Container will contain Picture*/
.mediaContainer{
  float: right;
  margin-top: 35px;
  margin-right: -25px;
}
/*This will override the image of v-card-media*/
.card__media{
  border-radius: 50%;
  /*border-style: solid;*/
  width: 70px;
}
/*Divider styling*/
.card .divider{
  border-top: 3px dotted seagreen;
  margin-left: 140px;
  width: 30%;
}
h1{
  font-size: 20px;
  width:100%;
  /* margin-left: 95px; */
  font-family: 'Josefin Sans', sans-serif;
}
h3{
  font-size: 14px;
  margin-left: 111px;
  font-family: 'Shadows Into Light Two', cursive;
}
p{
  font-size: 14px;
  font-family: 'Grand Hotel', cursive;
}
.quote{
  margin-top: -15px;
  margin-left: -15px;
  position: absolute;
  width: 70px;
  height: 50px;
  background-color: white;
  border-radius: 50%!important;
    /* z-index: 999; */
}
/* .Why_us{
   padding:60px 0px 0px 550px;
 
} */
/* .Why_us .h1{
  font-size: 28px;
  padding-left: 540px;
  padding-top: 35px; */
  
/* } */
.Customer_reviews .h2{
  font-size: 28px;
  padding-left: 470px;
  padding-top: 35px;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}
.what_we{
  padding: 120px 70px 70px 70px;
} 
.what_we .h3{
  padding-left:420px;
  font-size:28px;
  /* font-family: 'Courier New', Courier, monospace; */
}
.divider1{
  margin-top: 50px;
  border-top: 3px double #8c8b8b;
}
/* style for why us */

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
  background-color: #F2F2F2;
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
  box-shadow:1px 1px 50px rgba(0,0,0,0.2);
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
  box-shadow:1px 1px 50px rgba(0,0,0,0.3);
} 
.p-whyustag{
  width:300px;
  margin:auto;
  height:100%;

}

</style>