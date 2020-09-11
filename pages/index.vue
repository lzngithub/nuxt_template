<template>
  <div class="container">
    nihao {{data}}
  </div>
</template>

<script>
import home from '~/static/url/home'
export default {
  async asyncData(context){
    console.log(context.query);
    let { data } = await context.$axios.get('/li');
    return {
      data: data
    }
  },
  mounted() {
    this.$axios.get(home.li);
    this.$say();
    console.log(this.$she);
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
