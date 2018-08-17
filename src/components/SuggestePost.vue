<template>
  <div class="SuggestetPosts">
     <div class="container">
        <div class="jumbotron">
            <h1>Suggestet</h1>
            <h1>{{posts.title}}</h1> 
           
            <router-link  class="btn btn-info" :to="{name:'single', params:{id: posts.id}}">Click to read more</router-link>
           
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestetPosts",

    computed: {
        posts() {
            let posts = this.$store.state.posts;
            let randomItem = posts[Math.floor(Math.random()*posts.length)];
            return randomItem;
        
        }
    },

  
  
};
</script>

<style scoped>
</style>
    