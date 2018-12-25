<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    width: 100%;
    height: 630px;
    margin: 0;
    padding: 0;
    background: #F7F6F6;
    box-sizing: border-box;
    overflow: hidden;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
