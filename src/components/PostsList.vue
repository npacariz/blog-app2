<template>
<div>
    <div class="blog-post" v-for="post in posts" :key="post.id">
        <h2 class="blog-post-title">{{post.title}}</h2>
            <p class="blog-post-meta">{{post.createdAt | formatDate() }} </p>
            <p>{{post.id}}</p>
            <router-link  class="btn btn-info" :to="{name:'single', params:{id: post.id}}">View Post</router-link>
            <router-link class="btn btn-warning" :to="{name:'edit', params:{id: post.id}}">Edit</router-link>
            <button class="btn btn-danger" @click="deletePost(post)">Delete</button>
            <hr>
     </div>
</div>
</template>

<script>
import { mixins } from "../mixins/DateMixin.js";
export default {
  props: ["posts"],
  mixins: [mixins],

  methods: {
    deletePost(post) {
      if (confirm("Are you sure you wanth to delete post?")) {
        this.$store.dispatch("deletePost", post);
      }
    }
  }
};
</script>

<style>
</style>
