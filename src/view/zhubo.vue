<template>
  <div>
    <div class="tuijian">
      <div class="tuijian_icon">
        <img src="../assets/image/icon5.jpg" alt="">
        <span>私人FM</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon6.jpg" alt="">
        <span>每日推荐</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon7.jpg" alt="">
        <span>歌单</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon8.jpg" alt="">
        <span>排行榜</span>
      </div>
    </div>
    <div class="tuijianP">
      <p>今日优选</p>
    </div>
    <div>
      <div class="tuijianList">
        <img src="../assets/image/list3.jpg" alt="">
        <div class="tuijianInfo">
          <p>末那大叔</p>
          <span class="infoData">节目：18</span>
          <span class="infoData">愿你的故事有人你能懂</span>
        </div>
      </div>
      <div class="tuijianList">
        <img src="../assets/image/list4.jpg" alt="">
        <div class="tuijianInfo">
          <p>七月的风八月的雨，卑微的我喜欢</p>
          <span class="infoData">节目：281</span>
          <span class="infoData">失去猜到</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.infoData{
  font-size: 12px;
  color: #737476;
}
.tuijianList{
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
}
.tuijianList img{
  width: 80px;
  height: 80px;
}
.tuijianInfo{
  flex: 1;
  padding: 8px;
  box-sizing: border-box;
}
.tuijianP{
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}
  .tuijian{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    padding-bottom: 12px;
  }
  .tuijian_icon{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size:12px;
  }
  .tuijian_icon img{
    width: 50px;
    height: 50px;
  }
</style>
