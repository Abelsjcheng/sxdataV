<template>
 <div class="main overview">
    <div class="m_left">
      <div class="m_left1">
        <tabledata />
      </div>
      <div class="m_left1">
        <tabledata />
      </div>
    </div>
    <div class="m_right">
      <charts1 />   
    </div>
    
    <mainmap />
  </div>
  
</template>

<script>
import charts1 from './charts/charts1'
import tabledata from './charts/tabledata'
import mainmap from './mainmap'
export default {
components: {charts1,tabledata,mainmap
    },
name: "mianview",
  data () {
    return {
    };
  },
  
  
}
</script>

<style>


.m_left{
  width: 350px;
  min-height: 824px;
  
  position: absolute;
   
  left: 0;
}
div {
    display: block;
}

</style>
