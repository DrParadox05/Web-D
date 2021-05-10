<template>
  <div>
    <h2>Heading from demo component</h2>
    <p v-for="student in students">{{student}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return{
      students:['Tom','John','Rob']
    }
  }
}
</script>

<style>
h2{
  color:green;
}
p{
  color:blue;
  font-size: 1.2em;
}
</style>



