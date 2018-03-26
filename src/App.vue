<template>
  <div>
<navbar></navbar>
  </div>

   
</template>


<script>
import navbar from './components/utils/navbar';
import sidebar from './components/utils/sidebar'
export default {
  components:{
    'navbar':navbar,
    'sidebar':sidebar
  }
  
}
</script>
