<template>
  <div id="app">
    <Header v-if="notIsLoginPage" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderPerfume.vue'

import Footer from './components/FooterPerfume.vue'

export default {
  components: {
    Footer,
    Header
  },
  computed: {
    notIsLoginPage() {
      return this.$route.name !== "login";
    }
  }
};
</script>