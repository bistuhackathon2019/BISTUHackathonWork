<template>
  <div class="o-wrapper">
    <div class="header">
      <div class="header-avator">
        <img src="" alt="" class="avator">
      </div>
    </div>
    <div style="display: flex">
      <div style="display: flex;margin: 0 auto;position: relative">
        热度
      </div>
      <div style="display: flex;margin: 0 auto;position: relative" @click="click1">范围
        <div class="options" v-if="showOpc">
          <div class="options-item">全校</div>
          <div class="options-item">学院</div>
          <div class="options-item">个人</div>
        </div></div>
      <div style="display: flex;margin: 0 auto;position: relative">时间</div>
    </div>
    <el-divider></el-divider>
    <div class="opc" v-if="showOpc">
    </div>
    <div class="content-list">
      <div class="content-item">
        <div class="inner">
          <div class="item-header">
            <div class="item-header-avator"></div>
            <div class="item-header-name">finlu</div>
            <div class="item-header-time">1 hour age</div>
          </div>
          <div class="item-img-wrapper"></div>
        </div>
        <div class="em-list">
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/1.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/2.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/3.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/4.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/5.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/6.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
        </div>
        <div class="comment">
          <div class="comment-list">
            <div class="comment-item">
              <p class="name">zlccc</p>
              <p class="user-comment">啦啦啦</p>
            </div>
            <div class="comment-item">
              <p class="name">略略略</p>
              <p class="user-comment">啦啦啦啊啦啦啦</p>
            </div>
          </div>
          <div class="my-comment">
            <div class="my-comment-name">asdasd</div>
            <div class="my-comment-input-wrapper">
              <input type="text" class="my-comment-input"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="inner">
          <div class="item-header">
            <div class="item-header-avator"></div>
            <div class="item-header-name">finlu</div>
            <div class="item-header-time">1 hour age</div>
          </div>
          <div class="item-img-wrapper"></div>
        </div>
        <div class="em-list">
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/1.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/2.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/3.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/4.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/5.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/6.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
        </div>
        <div class="comment">
          <div class="comment-list">
            <div class="comment-item">
              <p class="name">zlccc</p>
              <p class="user-comment">啦啦啦</p>
            </div>
            <div class="comment-item">
              <p class="name">略略略</p>
              <p class="user-comment">啦啦啦啊啦啦啦</p>
            </div>
          </div>
          <div class="my-comment">
            <div class="my-comment-name">asdasd</div>
            <div class="my-comment-input-wrapper">
              <input type="text" class="my-comment-input"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="inner">
          <div class="item-header">
            <div class="item-header-avator"></div>
            <div class="item-header-name">finlu</div>
            <div class="item-header-time">1 hour age</div>
          </div>
          <div class="item-img-wrapper"></div>
        </div>
        <div class="em-list">
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/1.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/2.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/3.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/4.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/5.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/6.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
        </div>
        <div class="comment">
          <div class="comment-list">
            <div class="comment-item">
              <p class="name">zlccc</p>
              <p class="user-comment">啦啦啦</p>
            </div>
            <div class="comment-item">
              <p class="name">略略略</p>
              <p class="user-comment">啦啦啦啊啦啦啦</p>
            </div>
          </div>
          <div class="my-comment">
            <div class="my-comment-name">asdasd</div>
            <div class="my-comment-input-wrapper">
              <input type="text" class="my-comment-input"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="inner">
          <div class="item-header">
            <div class="item-header-avator"></div>
            <div class="item-header-name">finlu</div>
            <div class="item-header-time">1 hour age</div>
          </div>
          <div class="item-img-wrapper"></div>
        </div>
        <div class="em-list">
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/1.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/2.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/3.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/4.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/5.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/6.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
        </div>
        <div class="comment">
          <div class="comment-list">
            <div class="comment-item">
              <p class="name">zlccc</p>
              <p class="user-comment">啦啦啦</p>
            </div>
            <div class="comment-item">
              <p class="name">略略略</p>
              <p class="user-comment">啦啦啦啊啦啦啦</p>
            </div>
          </div>
          <div class="my-comment">
            <div class="my-comment-name">asdasd</div>
            <div class="my-comment-input-wrapper">
              <input type="text" class="my-comment-input"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="inner">
          <div class="item-header">
            <div class="item-header-avator"></div>
            <div class="item-header-name">finlu</div>
            <div class="item-header-time">1 hour age</div>
          </div>
          <div class="item-img-wrapper"></div>
        </div>
        <div class="em-list">
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/1.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/2.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/3.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/4.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/5.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
          <div class="em-item">
            <div style="display: inline-block" class="em-wrapper"><img class="em" src="/static/6.jpeg" alt=""></div>
            <div style="display: inline-block" class="num">x 1</div>
          </div>
        </div>
        <div class="comment">
          <div class="comment-list">
            <div class="comment-item">
              <p class="name">zlccc</p>
              <p class="user-comment">啦啦啦</p>
            </div>
            <div class="comment-item">
              <p class="name">略略略</p>
              <p class="user-comment">啦啦啦啊啦啦啦</p>
            </div>
          </div>
          <div class="my-comment">
            <div class="my-comment-name">asdasd</div>
            <div class="my-comment-input-wrapper">
              <input type="text" class="my-comment-input"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        showOpc: false
      }
    },
    methods: {
      click1 () {
        let body = document.getElementsByTagName('body')[0]
        if (this.showOpc) {
          body.style.overflow = 'auto'
        } else {
          body.style.overflow = 'hidden'
        }
        this.showOpc = !this.showOpc
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .o-wrapper
    margin-left 20px
    margin-right 20px
    position relative
    .options
      position absolute
      left -16px
      top 25px
      width 70px
      background-color #fff
      border-radius 12px
      z-index 101
      line-height 23px
    .options-item
      text-align: center

    .opc
      display flex
      flex-direction column
      justify-content center
      z-index 99
      left 0
      right 0
      top 110px
      bottom 0
      background-color rgba(0, 0, 0, .41)
      position fixed

    .el-divider--horizontal
      margin 5px 0 20px 0

    .header
      height 76px
      .header-avator
        margin 10px auto
        width 63px
        height 63px
        background-color #D8D8D8
        border-radius 50%

    .content-item
      /*width 325px*/
      /*height 359px*/
      padding 15px
      margin-bottom 10px

      .inner
        padding 15px
        margin-bottom 10px
        border 1px solid #fff000
        border-radius 12px

        .item-header
          height 26px
          width 299px

          .item-header-avator
            background-color #D8D8D8
            border-radius 50%
            width 26px
            height 26px
            display inline-block

          .item-header-name
            height 17px
            display inline-block

          .item-header-time
            display inline-block
            color: rgba(0, 0, 0, .8)
            vertical-align bottom
            font-size 12px
            margin-left 20px
            height 15px

      .item-img-wrapper
        background-color black
        height 299px
        margin-top 5px

      .em-list
        height 25px
        line-height 25px
        font-size 12px

        .em-item
          display inline-block

          .em-wrapper
            width 20px

            .em
              width 100%

      .comment
        .comment-list
          .comment-item
            height 20px
            line-height 20px

            .name
              display inline-block
              font-weight bolder

            .user-comment
              font-size 14px
              display inline-block

        .my-comment
          width 100%
          display flex
          height 20px
          line-height 20px

          .my-comment-name
            font-weight border
            display inline-block

          .my-comment-input-wrapper
            display inline-block
            width 100%
            margin-right 10px

            .my-comment-input
              display inline
              width 100%
              border 1px solid #D8D8D8
              border-radius 20px
              margin-left 5px
              line-height 20px
</style>
