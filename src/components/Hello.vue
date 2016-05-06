<template>
  <div class="hello">
    <h1> 这是 {{ msg }} </h1>
    <a v-link="{ path: '/test' }">
      <h4>跳转 test</h4>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello!'
      }
    }
  }
</script>

<style scoped>
  h1, h4 {
    color: #42b983;
  }
</style>
