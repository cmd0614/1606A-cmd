<template>
  <div class="login_body">
    <div class="login_top">
      <span><</span>
      <span>手机号登录</span>
      <span> </span>
    </div>
    <div class="login_list">
      <div class="listItem">
        <img src="../assets/image/5.png" alt="">
        <span>手机号</span>
      </div>
      <div class="listItem">
        <img src="../assets/image/6.png" alt="">
        <span>密码</span>
      </div>
    </div>
    <div>
      <button class="login_btn">登录</button>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.login_btn{
  height: 40px;
  width: 80%;
  background: #3D4446;
  border-radius: 20px;
  outline: none;
  margin-left: 10%;
  margin-top:16px;
}
.login_list{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.listItem{
  width: 100%;
  border-bottom: 1px solid #E5E6E7;
  padding: 10px 0;
}
.listItem img{
  width: 20px;
  margin-bottom:-8px;
}
.listItem span{
  font-size:12px;
  color: #666;
}
  .login_body{
    width: 100%;
    height:100%;
  }
  .login_top{
    height: 44px;
    line-height: 44px;
    width: 100%;
    display: flex;
    padding: 0 12px;
    color: #fff;
    box-sizing: border-box;
    background: #353A3C;
    justify-content: space-between;
  }
</style>
