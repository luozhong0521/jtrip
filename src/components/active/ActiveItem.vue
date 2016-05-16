<template>
  <div class="j-list-item j-margin-top-sm">
    <a href="" :id="item.id">
      <div class="j-list-left">
        <img src="../../assets/i/img-2.jpg" alt="">
      </div>
      <div class="j-list-right">
        <div class="j-list-name">【{{ item.name }}】</div>
        <div class="j-list-introduce j-text-333">{{ item.shortDescription.length>25 ? item.shortDescription.substr(0, 35)+'...' :
          item.shortDescription }}
        </div>
        <div class="j-list-info"><span>{{ item.time.start | dateFormat 'yyyy-MM-dd' }}</span><span class="j-padding-horizontal-sm">{{ item.signUpCount }}天</span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ['item', 'index']
  }
</script>
