<template>
  <header class="j-header">
    <a class="j-header-left" href="javascript:history.go(-1)"><i class="icon-back"></i></a>
    <div class="j-title">热门活动</div>
  </header>
  <div class="j-content">
    <div class="j-list-content j-padding-horizontal-sm j-bg-white">
      <active-item v-for="item in data.content" :item="item" :index="$index"></active-item>
    </div>
  </div>
</template>
<script>
  import ActiveItem from './ActiveItem'
  import activeListService from '../../services/active/list'

  export default {
    components: {
      ActiveItem
    }, data () {
      return {
        data: []
      }
    },
    route: {
      data: (transition) => {
        activeListService.getData(transition)
      }
    }
  }
</script>
