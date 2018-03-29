<template>
  <p>lala</p>
</template>
<script>
import axios from 'axios';
export default {
    data(){
     verifyToken;
        
    },
    created(){
        // console.log(this.$route.params.verifyToken)
        this.verifyToken = this.$route.params.verifyToken;
        this.verifyAccount(this.verifyToken);
        
},
 methods:{
     verifyAccount(verifyLink){
         axios.post('192.168.137.1:4000/api/data/create',{
             Link:this.verifyLink
             
         })
         .then(response => {
                console.log(response)
                if (response.success){
                    //navigation to login page;
                }
                else {
                    //navigation to resend the link;
                }

			})

			.catch (e => {
			
			})
     }

 }


}
</script>
