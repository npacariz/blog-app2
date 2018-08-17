<template>
    <div id="AddPost">
        <PostForm :title ="title" :newPost="newPost" @submit ="submit" @reset="reset" />
    </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
export default {
  name: "AddPost",
  components: {
    PostForm
  },
  props: ["posts"],
  data() {
    return {
      newPost: {
        text: "",
        title: ""
      },
      title: "Add Post"
    };
  },
  methods: {
    submit() {
      this.$route.params.id ? this.editPost() : this.addPost();
    },
    addPost() {
      this.$store.dispatch("addPosts", this.newPost);
      this.$router.push("/posts");
    },
    editPost() {
      this.$store.dispatch("editPost", this.newPost);
      this.$router.push("/posts");
    },
    reset() {
      this.newPost = {
        text: "",
        title: ""
      };
    }
  },

  created() {
    if (this.$route.params.id) {
      this.newPost = this.$store.getters.getSinglePost(this.$route.params.id);
      this.title = "Edit Post";
    }
  }
};
</script>

<style>
</style>
