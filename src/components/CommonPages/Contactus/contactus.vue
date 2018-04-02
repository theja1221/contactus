<template>
<div id="app">
  <v-app>
  
   <div class="outer">
         <v-container >
              <v-layout row wrap>
                  <v-flex xs12 class="heading" pt-4>
                      Heading
                  </v-flex>

              </v-layout>
         </v-container>
     
       <v-container fluid class="padding">
         
          <v-layout row wrap>
        
             <v-flex lg8 sm8 offset-lg2 offset-sm2 class="middle contactus" >
                <v-layout row wrap>
                      <v-flex xs12 lg7 class="contactusleft" >
                           <v-layout row wrap>
                              <v-flex lg8 pl-4 pt-4>
                                   <span class="headingleft">
                                     Send Us A  Message:
                                   </span>     
                              </v-flex>
                              <v-flex lg4 pt-4  text-lg-right text-sm-right text-xs-right  pr-4  >
                                  <span >
                                    <v-icon class="iconslefttop"> 
                                   <!-- <i class="fas fa-comment-alt"></i> -->
                                   </v-icon>
                                  </span>
                                  

                              </v-flex>
                           </v-layout>
                           <v-layout row wrap pt-3>
                                <v-flex lg5 pl-4 >
                                   <v-text-field label="Your Name" color="black"  v-model="name"></v-text-field>
                                </v-flex>
                                
                                <v-flex lg6 pl-4>
                                     <v-text-field label="E-Mail" id="testing" color="black" v-model="email" ></v-text-field>
                                </v-flex>
                           </v-layout>
                           <v-layout row wrap>
                                <v-flex lg5 pl-4>
                                   <v-text-field label="Mobile" color="black" v-model="phonenumber"></v-text-field>
                                </v-flex>
                                <v-flex lg6 pl-4>
                                    <v-text-field label="Company" color="black" v-model="company" ></v-text-field>
                                </v-flex>
                           </v-layout>
                           <v-layout row wrap pb-5>
                                <v-flex lg9  xs8  pl-4>
                                     <v-text-field label="Messsage" color="black" multi-line rows="3" v-model="message"> </v-text-field>
                                </v-flex>
                                <v-flex lg3 xs4 style="position:relative">
                                      <span class="iconcircle" elevation-3 v-on:click="submit">
                                          <v-icon class="iconsleftbottom">
                                             send
                                          </v-icon>
                                      </span>
                                </v-flex>
                           </v-layout>







                      </v-flex>
               
                      <v-flex xs12 lg5>
                           <v-layout row wrap pl-3 pt-4 pb-2>
                     <v-flex xs12 >
                        <span class="contactinfoheading">
                           Contact Information:
                        </span>
                     </v-flex>
                </v-layout>
                <v-layout row wrap pt-5>
                     <v-flex xs2 text-xs-center>
                         <span >
                             <v-icon class="icons" medium>home</v-icon>
                             <!-- <menu-icon class="icons"></menu-icon> -->
                         </span>
                     </v-flex>
                     <v-flex xs10 >
                         <span class="text">
                             {{home}}
                         </span>
                     </v-flex>
                </v-layout>
                <v-layout row wrap pt-4>
                     <v-flex xs2 text-xs-center>
                         <span>
                             <v-icon class="icons" medium >perm_contact_calendar</v-icon>
                         </span>
                     </v-flex>
                     <v-flex xs10>
                         <span class="text">
                             {{call}}
                         </span>  
                     </v-flex>
                </v-layout>
                <v-layout row wrap pt-4 pb-2>
                     <v-flex xs2 text-xs-center>
                         <span >
                             <v-icon class="icons" medium>email</v-icon>
                         </span>
                     </v-flex>
                     <v-flex xs10 pr-1>
                         <span class="text">
                             {{emailid}}
                         </span>
                     </v-flex>
                </v-layout>
                <v-layout row wrap pt-5 pb-2>
                    <v-flex lg2 sm2 text-lg-center text-sm-center offset-lg3 offset-sm3 text-xs-center>
                         <v-icon class="icons">{{icon1}}</v-icon>
                    </v-flex>
                    <v-flex lg2 sm2 text-lg-center text-sm-center text-xs-center>
                         <v-icon class="icons">
                            {{icon2}}
                         </v-icon>
                    </v-flex>
                    <v-flex lg2 sm2 text-lg-center text-sm-center text-xs-center>
                        <v-icon class="icons">
                           {{icon3}}
                        </v-icon>
                    </v-flex>

                </v-layout>
                      </v-flex>
                </v-layout>
                
             </v-flex>
            
         </v-layout>
         
        </v-container>
        
   </div>


    <v-container  class="footer" fluid>
      <v-layout row wrap>
            <v-flex xs9 mx-auto text-xs-center>
                        <v-layout row wrap>
                               footey
                        </v-layout>
            </v-flex>
      </v-layout>
    </v-container>
  </v-app>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      home: "360 King Street Festerville Trevose,PA 19053",
      call: "956115741514",
      emailid: "skylim@gmail.com",
      name: "",
      email: "",
      phonenumber: "",
      company:"",
      message: "",
      validx: true,
      icon1: "fab fa-twitter",
      icon2:"fab fa-linkedin",
      icon3:'fab fa-instagram'
    };
  },

  methods: {

    submit() {
      axios
        .post(`http://jsonplaceholder.typicode.com/posts`, {
          name: this.name,
          email: this.email,
          phone: this.phonenumber,
          company:this.company,
          message: this.message
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => {});
    }
  },

  computed: {
    valid: function() {
      return (
        this.name != "" &&
        this.email != "" &&
        this.phonenumber != "" &&
        this.message != ""
      );
    }
  }
};
</script>

<style scoped>
.padding{
  margin-top: 2%;
}
.heading{
  font-size: 25px;
  color:white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
 .middle{
  -webkit-box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.67);
-moz-box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.67);
box-shadow: 0px 0px 40px -10px rgba(0,0,0,0.67);

/* -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75); */

} 

.contactinfoheading {
  font-size: 23px;
  font-family: Segoe UI;
  color: white;
}
.headingleft {
  font-size: 23px;
  font-family: Segoe UI;
  color: black;
}
.outer {
  height:100vh;
  height:100%;
  background-color: blue;
  width: 100%;
  color: black;
  /* position: absolute; */
  position: relative;
  top: 0;
  background: rgba(85, 136, 223, 1);
  background: -moz-linear-gradient(
    top,
    rgba(85, 136, 223, 1) 0%,
    rgba(85, 136, 223, 1) 50%,
    rgba(241, 243, 245, 1) 50%,
    rgba(241, 243, 245, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(85, 136, 223, 1)),
    color-stop(50%, rgba(85, 136, 223, 1)),
    color-stop(50%, rgba(241, 243, 245, 1)),
    color-stop(100%, rgba(241, 243, 245, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(85, 136, 223, 1) 0%,
    rgba(85, 136, 223, 1) 50%,
    rgba(241, 243, 245, 1) 50%,
    rgba(241, 243, 245, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(85, 136, 223, 1) 0%,
    rgba(85, 136, 223, 1) 50%,
    rgba(241, 243, 245, 1) 50%,
    rgba(241, 243, 245, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(85, 136, 223, 1) 0%,
    rgba(85, 136, 223, 1) 50%,
    rgba(241, 243, 245, 1) 50%,
    rgba(241, 243, 245, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(85, 136, 223, 1) 0%,
    rgba(85, 136, 223, 1) 50%,
    rgba(241, 243, 245, 1) 50%,
    rgba(241, 243, 245, 1) 100%
  );
}

.contactus {
   height: 100%;
  /*width: 65%; */
  background-color: #113c6c;
  /* position: absolute;
  top: 22%;
  left: 19%; */
}
.contactusleft {
  background-color: white!important;
}
.icons {
  color: white;
  /* font-size: 35px; */
  /* height:50px; */
}
.iconslefttop{
  color: #5588c6;
  font-size: 35px;
}
.iconsleftbottom{
  color: white;
  font-size: 25px;
   position:absolute;
   top:8px;
   left:4px;
   transform: rotate(-36deg);
   /* text-align: center; */
   /* right:20px; */
   /* bottom:30px; */
   /* right:30px; */
}
.iconcircle{
  width:40px;
  height:40px;
  border-radius:50px;
  text-align: center;
  display:inline-block;
  position:absolute;
  bottom:28px;
  /* left:10px; */
  right:50px;
  background-color: #5588DF;
  box-shadow: #113c6c;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
}
.iconcircle:hover{
  background-color: white;
  border:1px solid #5588c6;

}
.iconcircle:hover .iconsleftbottom{
  color:#5588c6;
}

.text {
  vertical-align: middle;
  font-size: 16px;
  font-family: Segoe UI;
  color: white;
  text-align: center;
}
.footer {
  background-color: white;
  /* border-top: 0.5px solid grey; */
  /* position:absolute; */
  /* top:100vh; */
}
</style>
