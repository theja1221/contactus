<template>
  <v-container id="parentContainer">
      <v-layout row wrap id="parentLayout">
          <v-flex lg4 offset-lg4 md6 offset-md3 sm6 offset-sm3 xs12 id="parentFlex">
              <v-card flat tile>
                  <v-card-title primary-title>
                      FORGOT PASSWORD
                  </v-card-title>

                  <v-divider></v-divider>
                  <!-- class="input-group--focused" -->
                  <v-form class="form-group" v-model="valid" ref="form" @submit.prevent="send">
                    <v-container text-xs-center>
                        <v-layout row wrap>
                            <v-flex lg9 offset-lg1 md9 offset-md1 sm9 offset-sm1 xs9 offset-xs1>
                                <input 
                                type="email"
                                name="Email"
                                placeholder="E-Mail"
                                v-model="email"
                                required/>
                                <span v-if="email.length > 1">{{ email_msg }}</span>
                            </v-flex>
                        </v-layout>

                        <v-flex mb-3>
                            <v-btn id="but" top outline :class="{active: disable_btn}" :disabled="disable_btn" @click.prevent="send" type="submit" large style="border-radius: 4px">SUBMIT</v-btn>
                        </v-flex>
                    </v-container>
                  </v-form>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
    data: () =>({
        valid: false,
        email: '',
        email_msg: '',
        disable_btn: true,
       }),

    watch: {
        email :function(value) {
            this.valid_email(value, 'email_msg');
        }
    },   

    methods: {

        valid_email(email, msg){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                this[msg] = '';
                this.disable_btn = false;
                return true;    
            } else {
                this[msg] = 'Keep Typing...Waiting for a Valid email';
                this.disable_btn = true;
                return false;
            }
        },

        send () {
            if (this.$refs.form.validate()) {
            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                email: this.email
            })
            .then(response => {
            console.log(response)
            })
            .catch(e => { 
            })
            }
            this.email = '';
            this.email_msg = '';
            this.disable_btn = true;
        }
    }
}
</script>

<style scoped>
.card{
    border: solid lightgrey 1px;
    font-size: 16px;
}
.card__title{
    display: flex;
    justify-content: center;
}
#but{
    color: deepskyblue;
}
.divider{
    border-bottom: solid lightgrey 1px;
}
/*For Everything in the input field*/
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

