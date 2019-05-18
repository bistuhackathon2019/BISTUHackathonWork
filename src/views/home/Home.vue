<template>
<div>
  <router-link to="/login" tag="div">
    <div v-for="(item, index) in postList" :key="index">
      <el-card class="box-card">
        <div class="text">
          {{item.text}}
        </div>
        <div class="feedback">
          <div class="expression"></div>
          <div class="more">查看更多</div>
        </div>
      </el-card>
      <el-divider></el-divider>
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      postList: [
        {
          text: 'asdad frwgf rg rrf erfr greg rg rg'
        },
        {
          text: 'asdad frwgf rg rrf erfr greg rg rg'
        },
        {
          text: 'asdad frwgf rg rrf erfr greg rg rg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .box-card >>> .el-card__body
    padding 10px
  .box-card
    width 100%
    padding 0
    .text
      font-size 14px
      margin-bottom 10px
    .feedback
      height 30px
      overflow hidden
      .more
        float right
        width 52px
        line-height 30px
        font-size 13px
</style>
