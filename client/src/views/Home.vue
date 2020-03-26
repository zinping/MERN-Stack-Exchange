<template>
  <div>
    <!-- <button>Add Idea</button> -->
    <router-link to="/create-idea">Add New Idea</router-link>
    <div v-for="idea in ideas" :key="idea._id">
      {{ idea.idea }} {{ idea.votes }}
      <button @click="upVoteIdea(idea)">up vote</button>
      <button @click="downVoteIdea(idea)">down vote</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Home",
  created() {
    this.getIdeas();
  },
  components: {},
  methods: {
    ...mapActions(['getIdeas', 'upVoteIdea', 'downVoteIdea'])
  },
  computed: {
    ...mapState(['ideas'])
  }
};
</script>
