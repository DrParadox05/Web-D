<template>
  <div>
    <h1>{{ message }}</h1>
    <students></students>
  </div>

</template>

<script>
export default {
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
