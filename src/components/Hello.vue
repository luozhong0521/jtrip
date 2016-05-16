<template>
  <div class="hello">
    <h1> 这是list </h1>
    <div v-if="$loadingRouteData">Loading data...</div>
    <div v-if="!$loadingRouteData">
      <ul id="example-1">
        <li v-for="item in content">
          {{ item.name }}
        </li>
      </ul>
    </div>

    <a v-link="{ path: '/test' }">
      <h4>跳转 test</h4>
    </a>
  </div>
</template>

<script>
  import helloService from '../services/hello'

  export default {
    data () {
      return {
        content: []
      }
    },
    route: {
      data: (transition) => {
        helloService.getData(transition)
      }
    }
  }
</script>

<style scoped>
  h1, h4 {
    color: #42b983;
  }
</style>
