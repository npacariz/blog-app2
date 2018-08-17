<template>
  <div class="NavBar">
       <nav class="nav blog-nav">
          <router-link class="nav-link" :to="{name: 'posts'}" >Posts</router-link>
          <router-link class="nav-link" :to="{name: 'addPost'}" >Add Post</router-link>
          <a class="nav-link" href="#">Press</a>
          <a class="nav-link" href="#">New hires</a>
          <a class="nav-link" href="#">About</a>
        </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
</style>
