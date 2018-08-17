<template>
  <div id="ViewPost" >
  
    <div class="container">
        <div class="jumbotron">
        
            <h1>{{singlePost.title}}</h1> 
            <p>{{singlePost.text}}</p> 
            <small>{{singlePost.createdAt | formatDate()}}</small> 
        </div>
    </div>
    <div class="flexbox">
      <div class="suggestetPost">
        <SuggestePost />
      </div>
      <div class="comments">
        <div v-for="comment in singlePost.comments" :key="comment.id">
              <p>{{comment.text}}</p>
              <small>commented: {{comment.createdAt | diffForHumans()}}</small>
              <hr>
              <br>
        </div>
    
    <CommentForm @submit="submit" :newComment = "newComment"></CommentForm>
      </div>
    </div>
  </div>
</template>
<script>
import SuggestePost from "../components/SuggestePost.vue";
import CommentForm from "../components/CommentForm.vue";
import { mixins } from "../mixins/DateMixin.js";

export default {
  name: "ViewPost",
  mixins: [mixins],
  components: {
    CommentForm,
    SuggestePost
  },
  data() {
    return {
      newComment: {
        text: ""
      }
    };
  },
  methods: {
    submit() {
      let payload = { comment: this.newComment, id: this.singlePost.id };
      this.$store.dispatch("addComment", payload);
      this.newComment = {
        text: ""
      };
    }
  },
  computed: {
    singlePost() {
      
      return this.$store.getters.getSinglePost(this.$route.params.id);
    }
  },

  created(){
  
    
    this.$store.dispatch("getAllPosts");
     this.id = this.$route.params.id

     
  }
     
  

  
  
};
</script>

<style scoped>
.flexbox {
  display: flex;
  margin-left: 25%;
}
.suggestetPost{
  width: 300px;
  height: 300px;
  border: 1px black solid;
  background-color:red;
}

.comments {
  width: 700px;
  height: 300px;
}

</style>
