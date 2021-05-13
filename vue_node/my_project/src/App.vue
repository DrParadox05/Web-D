<template>
  <div>
    <h1>{{ message }}</h1>
    <random></random>
    <students v-bind:students="students"></students>
  </div>

</template>

<script>
import random from './components/random.vue'
import students from './components/students.vue'
export default {
  components:{
    'random':random,
    'students':students,
  },
  name: 'app',
  data () {
    return {
      message: 'Hello There!',

      students:[
        {name:'Jim',class:'5'},
        {name:'Tom',class:'7'},
        {name:'John',class:'9'},
        {name:'Rob',class:'12'},
      ],
    }
  }
}
</script>

<style>
h1{
  color:red;
}
</style>
