<template>
  <div>
    <router-link tag="div" to="/login">
      <img src="/static/back.png" alt="" class="back-icon">
    </router-link>
    <div class="avator-wrapper">
      <div class="avator">

      </div>
    </div>
    <el-form ref="registerForm" :model="registerForm" :rules="rules" label-width="80px">
      <el-form-item label="昵称" prop="nickName">
        <el-col :span="20">
          <el-input v-model="registerForm.nickName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-col :span="20">
          <el-input v-model="registerForm.realName"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="学院" prop="college">
        <el-col :span="20">
          <el-input v-model="registerForm.college"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-col :span="20">
          <el-input v-model="registerForm.username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-col :span="20">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="确定密码" prop="confirmPassword">
        <el-col :span="20">
          <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="20">
          <el-button type="primary" @click="submitForm('registerForm')" class="register-btn">立即注册</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    let checkConfirmPassword = (rule, value, callback) => {
      let that = this
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      setTimeout(() => {
        if (that.registerForm.password !== this.registerForm.confirmPassword) {
          return callback(new Error('请保持两次输入的密码一致'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      registerForm: {
        nickName: '',
        realName: '',
        college: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        nickName: [
          {required: true, message: '请输入昵称', trigger: 'blur'}
        ],
        realName: [
          {required: true, message: '请输入真实姓名', trigger: 'blur'}
        ],
        college: [
          {required: true, message: '请输入学院', trigger: 'blur'}
        ],
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, validator: checkConfirmPassword, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/api/v1/user/register', {
            username: this.registerForm.username,
            real_name: this.registerForm.realName,
            password: this.registerForm.password,
            institute: this.registerForm.college
          })
            .then((res) => {
              console.log(res)
            })
            .catch((error) => {
              console.log(error)
              alert('错误')
            })
          alert('注册成功')
        } else {
          alert('错误提交，请检查提交参数')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .back-icon
    position absolute
    left 20px
    top 20px
    width 20px
    height 25px
  .avator-wrapper
    margin 60px 0 40px 0
    width 100%
    .avator
      display block
      margin 0 auto
      width 120px
      height 120px
      border-radius 50%
      background-color gray
  .el-form-item
    margin-bottom 18px
    .register-btn
      width 100%
</style>
