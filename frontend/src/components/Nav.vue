<template>
  <nav class="nav_bar">
    <div class="logo">
      <a href="/"><img class="logo-img" src="../assets/logo.png" alt="logo"></a>
    </div>
    <div class="navigator">
      <ul class="list list1">
        <li class="item item1"><a class="item1 right-item"href="#">Login</a></li>
        <li class="item item1"> | </li>
        <li class="item item1">Services</li>
        <li class="item item1"> | </li>
        <li class="item item1">Blog</li>
        <li class="item item1"> | </li>
        <li class="item item1">CV</li>
        <li class="item item1"> | </li>
        <li class="item item1">Portfolio</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/nav.css';
</style>
