<template>
  <div id='app'>
    <router-view></router-view>
    <foot-guide v-show="$route.meta.showFooter" />
  </div>
</template>
<script>
// vuex映射函数(在methods里面用)
import { mapActions } from "vuex";
import FootGuide from "./components/FootGuide/FootGuide.vue";
export default {
  mounted() {
    // this.$store.dispatch("getAddress");
    this.getAddress()
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },

  components: {
    FootGuide
  },

  data() {
    return {};
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
