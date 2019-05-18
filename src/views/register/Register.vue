<template>
  <div>
    <router-link tag="div" to="/login">
      <img src="/static/back.png" alt="" class="back-icon">
    </router-link>
    <div class="avator-wrapper">
      <div class="avator">

      </div>
    </div>
    <el-form ref="registerForm" :model="registerForm" :rules="rules" class="register-form">
      <el-form-item prop="nickName" :inline-message="true">
        <el-col>
          <el-input v-model="registerForm.nickName" placeholder="昵称"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="realName" :inline-message="true">
        <el-col>
          <el-input v-model="registerForm.realName" placeholder="真实姓名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="college" :inline-message="true">
        <el-col>
          <el-select v-model="registerForm.college" placeholder="请选择">
            <el-option
              v-for="item in colleges"
              :key="item.id"
              :label="item.name"
              :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item prop="password" :inline-message="true">
        <el-col>
          <el-input type="password" v-model="registerForm.password" placeholder="密码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="confirmPassword" :inline-message="true">
        <el-col>
          <el-input type="password" v-model="registerForm.confirmPassword" placeholder="确定密码"></el-input>
        </el-col>
      </el-form-item>
      <div class="btns">
        <el-form-item>
          <el-col>
            <el-button type="mini" @click="submitForm('registerForm')" class="register-btn" :round="true">完成</el-button>
          </el-col>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  created () {
    axios.get('/api/v1/user/institute')
      .then((res) => {
        res = res.data
        console.log(res)
        this.colleges = res.data.institutes
        console.log(this.colleges)
      })
      .catch((error) => {
        console.log(error)
        alert('error')
      })
  },
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
      colleges: '',
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
            username: this.registerForm.nickName,
            real_name: this.registerForm.realName,
            password: this.registerForm.password,
            institute_id: this.registerForm.college
          })
            .then((res) => {
              res = res.data
              if (res.code === 0) {
                this.$router.push('/')
              } else if (res.data.code === '-1') {
                alert(res.data.msg)
              } else if (res.data.code === '-2') {
                alert(res.data.msg)
              }
            })
            .catch((error) => {
              console.log(error)
              alert('后端服务器出现问题')
            })
        } else {
          alert('错误提交，请检查提交参数')
          console.log(this.registerForm.college)
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .btns >>> .el-button
    color #fff
    border 0

  .btns >>> .el-button:focus, .el-button:focus
    color #fff !important

  .el-form-item
    margin-bottom 0 !important

  .btns
    margin-top 30px !important

  .el-form-item >>> .el-form-item__content
    line-height 35px
    margin 0 72px

  .register-form >>> .el-input__inner
    border 0
    border-radius 0
    border-bottom 1px solid #000000
    width 100%
    height 22px

  .register-btn
    width 100%
    background-color #000000

  .back-icon
    position absolute
    left 20px
    top 14.5px
    width 23px
    height 26px

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

  .el-form-item
    margin-bottom 18px

    .register-btn
      width 100%
</style>
