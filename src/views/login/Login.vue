<template>
  <div>
    <div class="avator-wrapper">
      <div class="avator">

      </div>
    </div>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" label-width="60px">
      <el-form-item prop="username" :inline-message="true">
        <el-col>
          <el-input v-model="loginForm.username" placeholder="昵称"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="password" :inline-message="true">
        <el-col>
          <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
        </el-col>
      </el-form-item>

      <div class="btns">
        <el-form-item>
          <el-col>
            <el-button type="mini" @click="submitForm('loginForm')" class="login-btn" :round="true">登录</el-button>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col>
            <el-button type="mini" @click="toRegister" class="register-btn" :round="true">注册</el-button>
          </el-col>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/v1/user', this.loginForm)
            .then((res) => {
              res = res.data
              if (res.code === 0) {
                this.changeUserInfo({userId: res.data.id})
                this.changeLoginStatus(true)
                this.changeToken(res.data.token)
                this.$router.push('/home')
              }
            }).catch((error) => {
              console.log(error)
              alert('错误')
            })
        } else {
          alert('错误提交，请检查提交参数')
          return false
        }
      })
    },
    toRegister () {
      this.$router.push('/register')
    },
    ...mapMutations(['changeUserInfo', 'changeLoginStatus', 'changeToken'])
  }
}
</script>

<style lang="stylus" scoped>
  .btns >>> .el-button
    color #fff
    border 0
  .btns >>> .el-button:focus, .el-button:focus
    color #fff!important
  .el-form-item
    margin-bottom 0!important
  .btns
    margin-top 30px
  .el-form-item >>> .el-form-item__content
    line-height 35px
    margin 0 72px
  .login-form >>> .el-input__inner
    border 0
    border-radius 0
    border-bottom 1px solid #000000
    height 22px
    width 100%
  .register-btn
    background-color rgba(151, 151, 151, .09)
    width 100%
    color #000000!important
  .login-btn
    width 100%
    background-color #000000
  .avator-wrapper
    margin 92px 0 40px 0
    width 100%
    .avator
      display block
      margin 0 auto
      width 95px
      height 95px
      border-radius 50%
      background-color gray
</style>
