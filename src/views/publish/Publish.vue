<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-avator">
        <img src="" alt="" class="avator">
      </div>
    </div>
    <el-divider></el-divider>
    <div class="content">
      <div class="desc"></div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publish'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    margin 0 20px

    .header
      height 120px
      line-height 120px

      .header-avator
        margin 10px auto
        width 100px
        height 100px
        background-color red
        border-radius 50%
</style>
