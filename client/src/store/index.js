import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

export default new Vuex.Store({
  state: {
    form: {}
  },
  mutations: {
    setForm(state, { key, value }) {
      state.form[key] = value;
    }
  },
  actions: {
    async createIdea(context) {
      console.log(context.state);
      // TODO: wrap in a service helper
      const response = await axios.post(
        "http://localhost:5000/ideas",
        context.state.form
      );
      const { data } = response;
      console.log("data", data);
      // TODO: redirect to main ideas list route
    }
  },
  modules: {}
});
