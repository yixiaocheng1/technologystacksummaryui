<template>
  <el-container>
    <el-header style="height:90px">
      <div>
        <img src="../assets/images/5fffb2b43a5d6.png" />
        <span class="system_name">Vue实战训练系统</span>
      </div>
      <div
        class="avatar_circle"
        @mouseover="avator_dropdown_show = true"
        @mouseout="avator_dropdown_show = false"
      >
        <el-avatar
          class="avatar_box"
          :size="avator_size"
          :src="imageurl"
        ></el-avatar>
        <div v-show="avator_dropdown_show" class="avator_dropdown">
          <ul class="operator_box">
            <li><i class="el-icon-user-solid"></i><span>个人中心</span></li>
            <li><i class="el-icon-s-tools"></i><span>账号设置</span></li>
            <li><i class="el-icon-key"></i><span>密码修改</span></li>
            <li><i class="el-icon-s-custom"></i><span>头像修改</span></li>
            <li><i class="el-icon-message-solid"></i><span>消息</span></li>
            <li><i class="el-icon-s-opportunity"></i><span>帮助</span></li>
          </ul>
          <button class="quitlogin" @click="quitlogin()">退出登录</button>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="rgba(51,51,51)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="html_main"></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      accountInfo: {
        sex: "男"
      },
      imageurl: require("@/assets/images/5ffec6372729f.png"),
      avator_dropdown_show: false,
      avator_size: 70
    };
  },
  methods: {
    quitlogin() {
      alert("退出登录");
    }
  }
};
</script>
<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  background-color: rgba(51, 51, 51);
}
.el-header div .system_name {
  margin-left: 10px;
  color: white;
  font-size: 20px;
}
.el-aside {
  background-color: rgba(51, 51, 51);
  margin: 0;
}
.el-main {
  background-color: rgba(232, 236, 239);
}
.el-container {
  height: 100%;
}
.el-menu {
  border-right: none;
}
.avatar_circle {
  margin-right: 114px;
  height: 90px;
  position: relative;
}
.operator_box {
  padding: 0;
  list-style: none;
  font-size: 10px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.operator_box li {
  width: 48px;
  padding: 5px 20px;
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.operator_box li span {
  width: 48px;
  flex: 1;
}
.avator_dropdown {
  width: 264px;
  position: absolute;
  background-color: white;
  top: 90px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
}
.avatar_box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.quitlogin {
  background-color: rgba(247, 246, 246);
  width: 264px;
  border: none;
  height: 40px;
}
.html_main {
  background: url(../assets/images/6013d91684d88.png) rgba(0, 0, 0, 0.1)
    no-repeat;
  background-size: contain;
  background-position: 50% 50%;
}
</style>
