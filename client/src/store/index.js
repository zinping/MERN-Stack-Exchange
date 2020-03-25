import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";
import router from "../router";

export default new Vuex.Store({
  state: {
    form: {
      // idea: ''
    }
  },
  mutations: {
    setForm(state, { key, value }) {
      state.form[key] = value;
    },
    setIdeas(state, ideas) {
      state.ideas = ideas;
    },
    setIdea(state, updatedIdea) {
      Object.assign(
        state.ideas.find(idea => idea._id === updatedIdea._id),
      )
    }
  },
  actions: {
    async createIdea(context) {
      await axios.post(
        "http://localhost:5000/ideas",
        context.state.form
      );
      router.push("/");
    },
    // commit will call a mutation
    async getIdeas(context) {
      const { data: ideas} = await axios.get("http://localhost:5000/ideas");
      context.commit("setIdeas", ideas);
    },
    async upVoteIdea(context, idea) {
      const { data: updatedIdea } = await axios.post(`http://localhost:5000/ideas/${idea._id}/votes`)
      context.commit('setIdea', idea);
    }
  },
  modules: {}
});
