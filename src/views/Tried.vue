<template>
  <h2>  Tried </h2>
  <p>I am {{name}} and my age is {{age}}</p>
  <p>I am {{combined.title}} and my age is {{combined.num}}</p>
    <h2>I am {{combinedReactive.title}} and my age is {{combinedReactive.num}}</h2>
<h4>{{example}}</h4>
  <button @click="handleName">Click to change </button>
    <button @click="handleCombined">Click to combine </button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
setup(){
    const name=ref("Eric");
    const age=ref(26)
   
   const combined=ref({title:"Kofi",num:40})
   const combinedReactive=reactive({title:"Believer",num:40})
    const handleName = () => {
        name.value="Yaw"
        age.value=30
    }

const example=reactive('Kofi')

const handleCombined=()=>{
    combined.value.title="Kwame"
    combined.value.num=60
    combinedReactive.title="Sober"
    combinedReactive.num=60
    example="Agyei"
}

     return {name,age,handleName,combined,handleCombined,combinedReactive,example}
}

}

</script>

<style>

</style>