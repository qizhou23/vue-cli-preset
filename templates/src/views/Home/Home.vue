<template>
  <div class="Home">
    <p class="text">我是Home，是一个全屏，数值是750</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.Home {
  .text {
    margin: 0;
    padding: 0;
    width: 750px;
    height: 50px;
    background: #2c3e50;
    font-size: 20px;
    color: #fff;
    @include flex(center, center);
  }
}
</style>
