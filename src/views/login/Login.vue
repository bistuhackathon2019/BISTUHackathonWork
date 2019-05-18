<template>
  <div>
    <div class="avator-wrapper">
      <div class="avator">

      </div>
    </div>
    <el-form ref="loginForm" :model="loginForm" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-col :span="20">
          <el-input v-model="loginForm.username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-col :span="20">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
          <el-col :span="20">
            <el-button type="primary" @click="submitForm('loginForm')" class="login-btn">登录</el-button>
          </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="20">
          <el-button type="primary" @click="toRegister" class="register-btn">注册</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
          {required: true, message: '请输入用户名', trigger: 'blur'}
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
          alert('登录成功')
        } else {
          alert('错误提交，请检查提交参数')
          return false
        }
      })
    },
    toRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .register-btn
    width 100%
  .login-btn
    width 100%
  .avator-wrapper
    margin 60px 0 40px 0
    width 100%
    .avator
      display block
      margin 0 auto
      width 120px
      height 120px
      border-radius 50%
      background-color red
</style>
