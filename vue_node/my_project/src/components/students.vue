<template>
<div>
  <p v-for="student in students">{{student.name}} -->> {{student.class}}</p>
</div>
</template>

<script>
export default{
  data(){
    return{
      students:[
        {name:'Jim',class:'5'},
        {name:'Tom',class:'7'},
        {name:'John',class:'9'},
        {name:'Rob',class:'12'},
      ]
    }
  }
}
</script>
