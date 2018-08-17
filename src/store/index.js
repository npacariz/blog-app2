import Vue from "vue";
import Vuex from "vuex";

import { posts } from "../services/PostsService.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    
  },

  mutations: {
    fillPosts: (state, posts) => {
      state.posts = posts;
    },
    addPosts: (state, newPost) => {
      state.posts.push(newPost);
    },
    editPost: (state, post) => {
      const postIndex = state.posts.findIndex(p => p.id === post.id);
      state.tasks.splice(postIndex, 1, post);
    },
    deletePost: (state, post) => {
      const postIndex = state.posts.indexOf(post);
      state.posts.splice(postIndex, 1);
    },
    addComment: (state, payload) => {
      state.posts.forEach(post => {
        if (post.id === payload.id) {
          post.comments.push(payload.comment);
        }
      });
    }
  },
  actions: {
    getAllPosts: context => {
      posts.getAll().then(response => {
        context.commit("fillPosts", response.data);
      });
    },
    addPosts: (context, newPosts) => {
      posts.addPost(newPosts).then(() => {
        context.commit("addPosts", newPosts);
      });
    },
    editPost: (context, Post) => {
      posts.editPost(Post).then(() => {
        context.commit("editPost", Post);
      });
    },
    deletePost: (context, post) => {
      posts.deletePost(post.id).then(() => {
        context.commit("deletePost", post);
      });
    },

    addComment: (context, payload) => {
      posts.addComment(payload.comment, payload.id).then(() => {
        context.commit("addComment", payload);
      });
    },
  },
  getters: {
    getSinglePost: state => id => {
      return state.posts.find(post => post.id === id);
    }
  }
});
