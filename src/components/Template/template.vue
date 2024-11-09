<template>
  <div id="app">
    <Navbar/>
    <div :class="$style['page-body']">
      <router-view></router-view>
    </div>
  </div>
</template>

<style src="./template.css" module></style>
<script src="./template.js"></script>
