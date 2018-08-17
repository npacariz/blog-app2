<template>
    <div id="InputForm">
        <h3>{{title}}</h3>
        <form @submit.prevent='submit()'>
        <div class="form-group">
            <label for="usr">Title:</label>
            <input type="text" class="form-control" v-model="newPost.title" required minlength='2'>
          </div>
          <div class="form-group">
            <label for="pwd">Body</label>
            <tinymce id="d1"  type="text" class="form-control" v-model="newPost.text" required maxlength="300"></tinymce>
            <Editor />
<div class="g-recaptcha" data-sitekey="6Le2gGoUAAAAAPgbeBygFBfEwf9q97YZ9Jn0qBRw"></div>

          </div>
        
        <button type="submit" class='btn btn-success'>{{title}}</button>
        <button type="reset" @click="reset" class='btn btn-warning'>Reset</button>
        

         </form>
    </div>
</template>

<script>

export default {
  name: "InputForm",

  props: {
    newPost: Object,
    title: String
  },
  methods: {
    submit() {
        if( grecaptcha.getResponse()){
            this.$emit("submit");
        }

    },
    reset() {
      this.$emit("reset");
    },

  
   
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

.g-recaptcha{
  margin: auto 0;
}
</style>
