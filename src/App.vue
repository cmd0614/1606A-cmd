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
    margin: 0;
    padding: 0;
    background: #F7F6F6;
    box-sizing: border-box;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
