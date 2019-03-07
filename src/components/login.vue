<template>
<div class="login-wrapper">
  <div class="content-login">
    <h2 style="text-align: center;">登  录</h2>
    <el-form
      ref="form"
      :model="form"
      label-width="75px"
      :rules="rules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item class="loginBtn-wrapper">
        <el-button class="btn-login" type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- <P v-if="isShow" style="color:red; margin:80px auto;">登陆成功后生成token：{{token}}</P> -->
</div>
</template>
<script>
import { login } from "@/api/user";
import { setToken } from '@/utils/auth'

export default {
  data() {
    return {
      isShow: false,
      token: '',
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async onLogin() {
      const valid = await this.$refs["form"].validate();
      // 表单验证失败，阻止代码后续执行
      if (!valid) {
        return;
      }
      // 表单验证通过，正常提交表单
      const { data } = await login(this.form);
      const { status } = data;
      const code = status.reCode;
      const mes = status.reMsg
      this.token = status.Token;
      if (code === "0000") {
        setToken(JSON.stringify(data))
        this.isShow = true
        this.$message({
          type: "success",
          message: "登录成功！"
        });
        this.$router.push({
          path: '/list'
        })
      } else{
        this.$message({
          type: "warning",
          message: mes
        });
      }
    }
  }
};
</script>
<style>
.login-wrapper {
  width: 100%;
  height: 100%;
  margin: 8% auto;
}
.header .user_prompt {
  font-size: 15px;
  color: #ffffff;
  position: absolute;
  right: 100px;
  bottom: 10px;
}

.login-wrapper .titBar {
  font-size: 43px;
  text-align: center;
  position: relative;
  top: 15%;
  color: #fff;
}
.login-wrapper .content-login {
  width: 400px;
  padding: 50px;
  border: 1px solid #ccc;
  margin: 0 auto;
  position: relative;
  top: 8%;
  background: #fff;
  border-radius: 6px;
}
.login-wrapper .content-login .el-form {
  padding-top: 15px;
}
.loginBtn-wrapper {
  margin-bottom: 10px;
}
.login-wrapper .content-login .el-form-item__content {
  width: auto;
  margin-left: 75px !important;
}
.login-wrapper .content-login .el-form-item__label {
  /* width: 50px!important; */
  line-height: 40px;
  font-size: 16px;
}
.btn-login {
  width: 90%;
}
.content-login .loginBtn-wrapper .el-form-item__content {
  margin-left: 35px !important;
}
.bottom {
  background: #1e424b;
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
