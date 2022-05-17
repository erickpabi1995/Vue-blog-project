<template>
  <div class="home">
  <h1>Jobs Available</h1>
     <div v-if="jobs">
  <div v-for="job in jobs" :key="job.id" class="jobdiv">
 <router-link to = "/:id" >
<h1>{{job.title}}</h1>
</router-link>
<p>{{job.description.substring(0,27) }} ...</p>
<img :src="job.imgUrl"/>
</div>
  </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {},
  data(){
    return{
jobs:null
    }

  },
  mounted(){
    fetch("http://localhost:5000/jobs")
    .then(res=>res.json())
    .then(data=>this.jobs = data)
  }
}
</script>


<style >
.jobdiv{
  
  text-align: center;
  padding: 20px;

}

.jobdiv h1{
  color:crimson;
  cursor: pointer;
}

.jobdiv p{
  color:gray;
  font-size: 20px;
}

.jobdiv img{
  width: 400px;
  height:300px;
  border-radius: 4px;
}

.jobdiv a{
  text-decoration: none;
}
</style>