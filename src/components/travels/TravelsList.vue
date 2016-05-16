<template>
  <header class="j-header">
    <a class="j-header-left" href="javascript:history.go(-1)"><i class="icon-back"></i></a>
    <div class="j-title">精彩游记</div>
  </header>
  <div class="j-content">
    <div class="j-list-content j-bg-white">
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
      <travels-item></travels-item>
    </div>
  </div>
</template>
<script>
  import TravelsItem from './TravelsItem'

  export default {
    components: {
      TravelsItem
    }
  }
</script>
