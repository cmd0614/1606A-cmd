<template>
  <div>
    <div class="tuijian">
      <div class="tuijian_icon">
        <img src="../assets/image/icon1.jpg" alt="">
        <span>电台分类</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon2.jpg" alt="">
        <span>电台排行</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon3.jpg" alt="">
        <span>DI电音</span>
      </div>
      <div class="tuijian_icon">
        <img src="../assets/image/icon4.jpg" alt="">
        <span>小冰电台</span>
      </div>
    </div>
    <div class="ps">推荐歌单 ></div>
    <div class="lists">
      <div class="listItem">
        <img src="../assets/image/list.jpg" alt="">
        <p class="listP">‘要做什么梦是每个人的自由’</p>
      </div>
      <div class="listItem">
        <img src="../assets/image/list1.jpg" alt="">
        <p class="listP">‘若不能一起，来世你愿陪我看遍万水千山’</p>
      </div>
      <div class="listItem">
        <img src="../assets/image/list2.jpg" alt="">
        <p class="listP">‘我的民谣，你的故事’</p>
      </div>
      <div class="listItem">
        <img src="../assets/image/list2.jpg" alt="">
        <p class="listP">‘要做什么梦是每个人的自由’</p>
      </div>
      <div class="listItem">
        <img src="../assets/image/list1.jpg" alt="">
        <p class="listP">‘若不能一起，来世你愿陪我看遍万水千山’</p>
      </div>
      <div class="listItem">
        <img src="../assets/image/list.jpg" alt="">
        <p class="listP">‘我的民谣，你的故事’</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.lists{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.listItem{
  width: 33%;
  padding: 0 4px;
  box-sizing: border-box;
}
.listItem img{
  width: 100%;
}
.listP{
  font-size: 12px;
}
.ps{
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
