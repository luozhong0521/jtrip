<template>
  <header class="j-index j-bg-white">
    <img class="j-headimg" src="../assets/i/headimg.jpg"/>
    <label class="j-block j-margin-top-sm-sm j-username">柏小生</label>
  </header>
  <ul class="j-menu j-bg-white">
    <li class=""><a v-link="{ path: '/active' }" class="j-menu-active">我的活动</a></li>
    <li class=""><a v-link="{ path: '/travels' }" class="j-menu-travels">我的游记</a></li>
    <li class=""><a href="" class="j-menu-club">俱乐部</a></li>
  </ul>
  <div class="j-slide j-margin-top-sm j-bg-white">
    <img src="../assets/i/img.jpg" alt="">
  </div>
  <div class="j-margin-top-sm j-bg-white">
    <div class="j-list-header j-padding-sm">
      <label class="j-list-title j-star-red">热门活动</label>
      <a class="j-list-more" v-link="{ path: '/active' }">更多</a>
    </div>
    <div class="j-list-content j-padding-horizontal-sm">
      <active-item v-for="item in data.content" :item="item" :index="$index"></active-item>
    </div>
  </div>

  <div class="j-margin-top-sm j-bg-white">
    <div class="j-list-header j-padding-sm">
      <label class="j-list-title j-star-blue">精彩游记</label>
      <a class="j-list-more" v-link="{ path: '/travels' }">更多</a>
    </div>
    <div class="j-list-content">
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
    </div>
  </div>
</template>
<style>

</style>
<script>
  import ActiveItem from './active/ActiveItem'
  import TravelsItem from './travels/TravelsItem'
  import indexService from '../services/index'

  export default {
    components: {
      ActiveItem,
      TravelsItem
    },
    data () {
      return {
        data: []
      }
    },
    route: {
      data: (transition) => {
        indexService.getData(transition)
      }
    }
  }
</script>
