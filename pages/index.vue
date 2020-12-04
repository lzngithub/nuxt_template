<template>
  <div class="container">
    <div class="she">{{ she }}</div>
    <div class="she">{{ url.li }}</div>
    <div class="she">{{ $password }}</div>
    <div class="she">{{ universal }}</div>
    <div class="img">
      <img v-lazy="" alt="" mode="aspectFit" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import home from '@/static/url/home'

export default {
  data() {
    return {
      url: home,
    }
  },
  computed: {
    ...mapState({
      she: state => state.users.she,
    }),
    universal() {
      return this.$say(5, 10)
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .she {
    color: pink;
  }
}
.img {
  width: 100px;
  height: 100px;
}
</style>
