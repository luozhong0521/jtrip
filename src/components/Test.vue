<template>
  <div class="test">
    <h1> 这是 {{ msg }} </h1>
    <a v-link="{ path: '/' }">
      <h4>跳转 hello</h4>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'test!'
      }
    }
  }
</script>

<style scoped>
  h1,h4 {
    color: #42b983;
  }
</style>
