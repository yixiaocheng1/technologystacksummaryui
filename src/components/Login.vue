<template>
  <div class="login_container">
    <div class="introduce_title">
      <p>欢迎登录</p>
      <p>最垃圾的前端网站</p>
    </div>
    <div class="login_box">
      <div class="avator_box">
        <img src="../assets/images/vueico.jpg" />
      </div>
      <el-form
        :rules="rules"
        ref="loginFormRef"
        :model="loginform"
        label-width="0px"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginform.username"
            placeholder="请输入用户名..."
            prefix-icon="iconfont icon-dengluyonghu"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginform.password"
            placeholder="请输入密码..."
            type="password"
            prefix-icon="iconfont icon-denglu-mima"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="validate_item">
          <el-input v-model="loginform.code" class="validate_input"></el-input>
          <img
            id="validate_img"
            :src="
              'http://localhost:9000/api/UserAuthorization/user/vierificationCode'
            "
            alt="看不清？点击更换"
            onclick="this.src = this.src + '?'"
          />
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginform: {
        username: "6545454545",
        password: "664545455",
        code: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入登录名!", trigger: "blur" },
          { min: 8, max: 20, message: "登录名长度在8-20之间!", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码!", trigger: "blur" },
          { min: 8, max: 16, message: "密码长度在8-16个字符之间!" }
        ],
        code: [
          { required: true, message: "请输入验证码!", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位!" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.loginFormRef.validate(async isSuccess => {
        if (isSuccess) {
          //这里没有提交cookie
          await this.$http
            .get(
              `/api/UserAuthorization/user/login?username=${this.loginform.username}&password=${this.loginform.password}&code=${this.loginform.code}`
            )
            .then(x => {
              if (x.data == "登陆成功!") {
                this.$router.push("/menu");
              } else {
                this.$message.error(x.data);
                this.loginform.code = "";
                document.getElementById("validate_img").click();
              }
            });
        }
      });
    },
    onReset() {
      document.getElementById("validate_img").click();
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.login_container {
  background-image: url("../assets/images/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png");
  height: 100%;
  background-size: cover;
}
.introduce_title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  width: 600px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}
.login_box {
  background-color: white;
  width: 450px;
  height: 350px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
}
.avator_box {
  width: 130px;
  height: 130px;
  padding: 10px;
  border-radius: 100%;
  padding: 3px;
  box-shadow: 0 0 10px #ddd;
  border: 1px solid #eee;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  width: 100%;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}
.validate_input {
  width: 25%;
  float: left;
}
#validate_img {
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
</style>
