<template>
  <div class="AppPosts">
      <h1>Posts</h1>
    <PostsList :posts= "posts" />
        
      
  </div>
</template>

<script>
import PostsList from "../components/PostsList.vue";
export default {
  name: "AppPosts",

  components: {
    PostsList
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch("getAllPosts");
    });
  }
};
</script>

<style scoped>
</style>
