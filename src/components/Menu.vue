<template>
  <el-container>
    <el-header style="height:90px">
      <div>
        <img src="../assets/images/5fffb2b43a5d6.png" />
        <span>Vue实战训练系统</span>
      </div>
       <div class="avatar_circle"  @mouseover="avator_dropdown_show = true" @mouseout="avator_dropdown_show = false" >
          <el-avatar class="avatar_box" :size="avator_size" :src="imageurl"></el-avatar>
          <div  class="avator_dropdown">
                <ul>
                  <li><i class="el-icon-user-solid"></i></li>
                  <li>个人中心</li>
                </ul>
                <ul>
                  <li><i class="el-icon-s-tools"></i></li>
                  <li>账号设置</li>
                </ul>
                <ul>
                  <li><i class="el-icon-key"></i></li>
                  <li>密码修改</li>
                </ul>
                <ul>
                  <li><i class="el-icon-s-custom"></i></li>
                  <li>头像修改</li>
                </ul>
                <ul>
                  <li><i class="el-icon-message-solid"></i></li>
                  <li>消息</li>
                </ul>
                <ul>
                  <li><i class="el-icon-s-opportunity"></i></li>
                  <li>帮助</li>
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
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <el-main>Main</el-main>
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
      avator_dropdown_show:false,
      avator_size:70
    };
  },
  methods: {
    quitlogin(){
      alert("退出登录");
    }
  }
};
</script>
<style lang="less" scoped>
.el-header {
//   border-bottom: 1px solid rgba(230, 230, 230);
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  background-color: rgba(51,51,51);
  >div{
      display: flex;
      align-items: center;
      span{
          margin-left: 10px;
          color: white;
          font-size: 20px;
      }
  }
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
.avatar_circle{
  margin-right: 100px;
}
ul{
  float: left;
  list-style: none;
  font-size: 10px;
  padding: 0 20px;
  width: 48px;
}
.avator_dropdown{
  width: 264px;
  position: absolute;
  background-color: white;
  top: 90px;
  right: 20px;
  border-radius: 5px;
}
.avatar_box{
  position: relative;
}
.quitlogin{
  background-color: rgba(247,246,246);
  width: 264px;
  border: none;
  height: 40px;
}
</style>
