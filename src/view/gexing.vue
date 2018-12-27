<template>
  <div class="bodys">
    <div class="body_top">
      <div class="body_search">
        <img src="../assets/image/video.jpg"/>
        <input type="text" placeholder="猜你喜欢 浮生">
        <img src="../assets/image/pai.jpg"/>
      </div>
      <div class="body_top_tab">
        <div class="bodyTopTabItem">
          <router-link to="/tuijian">
            <span @click="changeFlag()">
              个性推荐
              <b class="bs" v-if="flag === 1"></b>
            </span>
          </router-link>
        </div>
        <div class="bodyTopTabItem">
          <router-link to="/zhubo">
            <span @click="changeFlags()">
              主播电台
              <b class="bs" v-if="flag === 2"></b>
            </span>
          </router-link>
        </div>
      </div>
      <el-carousel indicator-position="outside">
        <el-carousel-item>
          <img src="http://p1.music.126.net/8L1C4PL7QAT1Gav9L6LWVQ==/109951163747817794.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="http://p1.music.126.net/Jp6yvwYLiY_1NaaY-bmgiQ==/109951163747807381.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="http://p1.music.126.net/53q6_ieEbkuvHbxMHZkQ0A==/109951163747821428.jpg" alt="">
        </el-carousel-item>
      </el-carousel>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        flag:1
      }
    },
    methods: {
      changeFlag(){
        console.log(1)
        this.flag = 1
      },
      changeFlags(){
        this.flag = 2
      }
    }
  }
</script>

<style>
  .el-carousel__container{
    width: 96%;
    margin-left: 2%;
    height: 180px;
    margin-top:14px;
  }
  .el-carousel__item{
    border-radius: 10px;
  }
  a{
    color: #fff;
  }
  .body_top_tab{
    width: 100%;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .bodyTopTabItem{
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
  .bodyTopTabItem span{
    display: inline-block;
    height: 40px;
    line-height: 40px; 
    position: relative;
  }
  .bs{
    width: 20px;
    height: 4px;
    background: #fff;
    position: absolute;
    left: 50%;
    bottom: 4px;
    margin-left: -10px;
  }
  
  .bodys{
    width: 100%;
  }
  .body_top{
    width: 100%;
    height: 260px;
    background: #363B3E;
  }
  .body_search{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background: #363B3E;
    padding: 10px 6px;
    box-sizing: border-box;
  }
  .body_search img{
    width: 30px;
    padding: 0 6px;
  }
  .body_search input{
    flex:1;
    height: 70%;
    background: #5B6161;
    border-radius: 20px;
    text-align: center;
    border: 0;
    outline: none;
  }
</style>
