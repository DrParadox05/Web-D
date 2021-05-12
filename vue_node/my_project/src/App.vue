<template>
  <div>
    <h1>{{ message }}</h1>
    <random></random>
    <students></students>
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
      message: 'Hello There!'
    }
  }
}
</script>

<style>
h1{
  color:red;
}
</style>
