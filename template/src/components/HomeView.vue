<template>
  <div class="">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    ...mapGetters({
      messages: 'messages',
    }),
  },
  mounted() {
    this.$store.dispatch('getMessages');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
