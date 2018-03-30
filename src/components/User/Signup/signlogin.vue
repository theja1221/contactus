<template>
  <div id="signlogin">
      <!-- In a container we will have a layout and 2 flexes adj to each other and each will contain card -->
    <v-container text-xs-center>
      <v-layout row wrap>
        <!-- Left Side Card , will contain image and will be on top in mobile -->
        <v-flex id="left" lg4 offset-lg2 md4 offset-md2 hidden-sm-and-down>
          <v-card>
              
          </v-card>
        </v-flex>
        <!-- Right hand Side Card , will contain the tabs and will be below the image in mobile -->
        <v-flex id="right" lg4 md4 sm6 xs12>
          <v-tabs v-model="active" grow class="navTabs" slider-color="light-blue accent-1">
            <v-tab v-for="(detail,i) in details" :key="i" style="margin-top: 8px">
              <p class="detailStyle">{{ detail }}</p>
            </v-tab>
            <!-- The Items are 2 forms for Login and Sign-Up -->
            <v-tab-item class="itemStyle">
              <!-- Sign-Up Form inside the Card -->
              <v-card>
                <v-form>
                  <v-container text-xs-center>
                    <!-- Text-Field Email -->
                    <v-layout row wrap>
                      <v-flex lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="email"
                        name="Email"
                        placeholder="E-Mail"
                        v-model="email"
                        required/>
                        <span v-if="email.length > 1">{{ email_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Phone No. -->
                    <v-layout  row wrap>
                      <v-flex lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="text" 
                        name="contact" 
                        v-model="contact"
                        placeholder="Contact Number"
                        required/>
                        <span v-show="msg1">{{ contact_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Password -->
                    <v-layout row wrap>
                      <v-flex lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="password" 
                        name="Password" 
                        v-model="password"
                        placeholder="Password"        
                        required/>
                        <span v-show="msg2">{{ pwd_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- Text-Field Confirm Password -->
                    <v-layout row wrap>
                      <v-flex lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="password" 
                        name="confpassword" 
                        v-model="confpassword"
                        placeholder="Confirm Password"            
                        required/>
                        <span v-show="msg3">{{ confpwd_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- The Submit and CLear Buttons -->
                    <v-layout row-wrap>
                      <v-flex mb-3>
                            <v-btn class="button" :class="{active: disable_btn}" :disabled="disable_btn" @click.prevent="submitSignUp" top outline type="submit" large style="border-radius: 4px">SUBMIT</v-btn>
                        </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>
            </v-tab-item>

            <v-tab-item class="itemStyle">
              <!-- Login Form inside the Card -->
              <v-card height="404px">
                <v-form>
                  <v-container text-xs-center>
                    <!-- Text-Field Email -->
                    <v-layout row wrap>
                      <v-flex  lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="email"
                        name="Email"
                        placeholder="E-Mail"
                        v-model="email"
                        required/>
                        <span v-if="email.length > 1">{{ email_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- Text Field Password -->
                    <v-layout row wrap>
                      <v-flex  lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1 class="form-group">
                        <input 
                        type="password" 
                        name="Password" 
                        v-model="password"
                        placeholder="Password"      
                        required/>
                        <span v-show="msg2">{{ pwd_msg }}</span>
                      </v-flex>
                    </v-layout>
                    <!-- The Forgot Password(need to attach events) -->
                      <v-flex lg4 md4 sm4 xs4>
                        <router-link to="/forgot">
                            <v-btn depressed left color="white">Forgot Password?</v-btn>
                        </router-link>
                      </v-flex>
                    <!-- The Submit and CLear Buttons -->
                    <v-layout row wrap>
                      <v-flex mb-3>
                        <v-btn class="button" :class="{active: disable_btn}" :disabled="disable_btn" @click.prevent="submitLogin" top outline type="submit" large style="border-radius: 4px">SUBMIT</v-btn>
                      </v-flex>
                  <!-- <v-btn v-on:click="buttonClick">TRY</v-btn> -->
                                    <!-- <v-btn v-on:click="buttonClicky">TRY</v-btn> -->

                    </v-layout>
                  </v-container>
                </v-form>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>  
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import axios from 'axios'
import forgotpassword from './forgotpassword'
import auth from './../../../auth/authorisation.js'

export default {
    components:{
        'forgotpass': forgotpassword,
    },

    data: () => ({  
      localStoraze:'',
      details: ['SIGN-UP', 'LOGIN'],
      active: null,
      disable_btn: true,
      msg1: true,
      msg2: true,
      msg3: true,
      email_msg: '',
      contact_msg: '',
       pwd_msg: '',
      email: '',
      contact: '',
      password: '',
      confpassword: '',
      confpwd_msg: '',
    }),

    watch: {
    email: function(value) {
      this.valid_email(value, 'email_msg');
    },
    password: function(value) {
      if(this.check_password_length(value, 'pwd_msg', 6)) {
        this.check_passwords_match();
      }
    },
    confpassword: function(value) {
      if(this.check_password_length(value, 'confpwd_msg', 6)) {
        this.check_passwords_match();
      }
    }
  },

    methods: {

        valid_email(email, msg) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this[msg] = '';
            this.disable_btn = false;
            return true;
        } else {
            this[msg] = 'Please enter valid email';
            this.disable_btn = true;
            return false;
          } 
        },
        
        check_password_length(value, msg, total) {
        var length = value.length;
        var sum = 0;
        var display;
        
        sum = (total - length);
        
        switch(sum) {
            case 0:
            display = '';
            break;
            case 1:
            display = sum + ' more character to type';
            break;
            default:
            display = sum + ' more characters to type';
        }
        
        if(length >= total) {
            this[msg] = '';
            this.disable_btn = false;
            return true;
        } else {
            this[msg] = display;
            this.disable_btn = true;
            return false;
        }
        
        },
        
        check_passwords_match() {
        if(this.password.length > 5 && this.confpassword.length > 5) {
            if(this.confpassword != this.password) {
                this.confpwd_msg = 'Password Fields do not match';
                this.disable_btn = true;
                return true;
            } else {
                this.confpwd_msg = '';
                this.disable_btn = false;
                return false;
            }
            }
        },

        
        
      

        // buttonClicky(){
        //   this.localStoraze=window.localStorage.getItem("key")
        //   console.log(this.localStoraze)
        // },

        submitSignUp () {

            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                email: this.email,
                contact: this.contact,
                password: this.password
            })
            .then(response => {
            console.log(response)
            // window.localStorage.setItem("tokenName",response.token)
            // console.log(window.localStorage.getItem("tokenName"))
            /*

            localstorage.setitem('user')


            */
            })
            .catch(e => {
            })
            disable_btn: true;
            msg1: true;
            msg2: true;
            msg3: true;
            email: '';
            email_msg: '';
            contact: '';
            contact_msg: '';
            password: '';
            pwd_msg: '';
            confpassword: '';
            confpwd_msg: '';
        },

        submitLogin () {

          localStorage.setItem('jwt',JSON.stringify({"email":this.email}))
          this.$router.push("/user/profile")
``




//             axios.post(`http://jsonplaceholder.typicode.com/posts`, {
//                 email: this.email,
//                 password: this.password
//             })
//             .then(response => {
//             console.log(response)
//             })
//             .catch(e => {
//                 // 
//             })
//             disable_btn: true;
//             msg1: true;
//             msg2: true;
//             msg3: true;
//             email: '';
//             password: '';
//             contact: '';
//             email_msg: '';
//             contact_msg: '';
//             pwd_msg: '';
//             confpassword: '';
//             confpwd_msg: '';
         }
    }
    }
        
</script>

<style scoped>
#left{
  border-top: solid lightgray 1px; 
  border-bottom: solid lightgray 1px; 
  border-left: solid lightgray 1px; 
  font-size: 14px;
}
#right{
    border: solid lightgray 1px;
}
.detailStyle{
  font-size: 18px;
}
.itemStyle{
  font-size: 14px;
}
.button{
    color: deepskyblue;
}
input{
    width: 100%;
    border-bottom: solid lightgray 1px;
    outline: none;
    padding: 20px 1px;
    margin: 10px;
} 
input:hover{
    border-bottom: solid black 1px;
}
input:focus{
    border-bottom: deepskyblue solid 2px;

} 
input::-webkit-input-placeholder {
 font-family: 'roboto', sans-serif;
 -webkit-transition: all 0.3s ease-in-out;
 transition: all 0.3s ease-in-out;
}
input:focus::-webkit-input-placeholder, input:valid::-webkit-input-placeholder {
 color: deepskyblue;
 font-size: 11px;
 -webkit-transform: translateY(-20px);
 transform: translateY(-20px);
 visibility: visible !important;
}
span {
    font-size: .8em;
    color: red;
}  
/* span#characters {
    font-size: .8em;
    color: grey;
} */
</style>
