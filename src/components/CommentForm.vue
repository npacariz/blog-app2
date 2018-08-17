<template>
    <div id="InputForm">
        <h3>Comment: </h3>
        <form @submit.prevent='submit()'>
          <div class="form-group">
            <label for="pwd">Comment</label>
            <textarea type="text" class="form-control" v-model="newComment.text" required maxlength="300"></textarea>
          </div>
        <button type="submit" class='btn btn-success'>Add Comment</button>
         </form>
    </div>
</template>

<script>


export default {
  
  name: "InputForm",
  props: {
    newComment: Object
  },
  methods: {
    submit() {
      
      this.$emit("submit");

    }
  }
};
</script>

<style scoped>
.form-group {
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
}
button {
  margin: 5px;
}
</style>
