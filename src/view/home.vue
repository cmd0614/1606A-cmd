<template>
  <div class="bodys">
    <div class="bodys_top">
      <img src="../assets/image/banner.png" />
    </div>
    <div class="body_btn">
      <div class="btns_box">
        <router-link to="/login">
          <button class="btns">手机号登录</button>
        </router-link>
      </div>
      <div class="btns_box">
        <button class="btns">注册</button>
      </div>
      <div class="btns_box">
        <router-link to="/gexing">
          <span class="btns_now">游客试用</span>
        </router-link>
      </div>
    </div>
    <div class="body_bot">
      <div class="body_bot_top">其他登录方式</div>
      <div class="body_bot_list">
        <ul class="body_bot_ul">
          <li v-for="datas in listData" class="body_bot_li">
            <img :src="require(`../assets/image/${datas.url}.png`)" alt="">
            <span>{{datas.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData:[
        {
          url:'1',
          name:'微信'
        },
        {
          url:'2',
          name:'QQ'
        },
        {
          url:'3',
          name:'微博'
        },
        {
          url:'4',
          name:'网易邮箱'
        }
      ]
    }
  }
}
</script>

<style>
.body_bot_ul{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
.body_bot_li{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:12px;
}
.body_bot_li img{
  width: 40px;
}
.body_bot_top{
  width: 100%;
  text-align: center;
  color:#959494;
}
.body_bot_list{
  width: 100%;
}
.body_bot_list ul{
  width: 100%;
  display: flex;
}
li{
  list-style: none;
}
.body_bot{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.btns_box{
  width: 100%;
  text-align: center;
}
.btns_now{
  display: inline-block;
  margin-top:10px;
  color: #959494;
  border-bottom: 1px solid #959494;
}
.btns{
  width: 80%;
  height: 40px;
  border:1px solid #D44037;
  border-radius: 20px;
  text-align: center;
  background: #fff;
  margin-top:16px;
  outline: none;
  color:#D44037;
}
  .bodys{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .bodys_top{
    width: 100%;
  }
  .bodys_top img{
    width: 100%;
    height: 40%;
  }
  
</style>
