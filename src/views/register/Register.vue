<template>
  <div>
    <el-form ref="registerForm" :model="registerForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确定密码" prop="confirmPassword">
        <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
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

</style>
