<template>
  <el-container>
    <el-header style="height:90px">
      <div>
        <img src="../assets/images/5fffb2b43a5d6.png" />
        <span>Vue实战训练系统</span>
      </div>
      <el-dropdown split-button type="primary" @click="handleClick">
        <img class="userimg" :src="imageurl" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
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
      imageurl: require("@/assets/images/5ffec671591a6.png")
    };
  },
  methods: {
    handleClick() {
      alert("button click");
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
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.userimg {
  width: 100px;
  height: 50px;
}
.el-button el-button--primary el-dropdown__caret-button {
  height: 50px;
}
 .el-menu {
    border-right: none;
}
</style>
