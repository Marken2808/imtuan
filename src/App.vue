<template #lead>

  <div id="app">
    <b-container fluid id="page0">
        <b-avatar :src="require('@/assets/Messi_avt.jpg')" size="300" class="mt-5"></b-avatar>
        <h1 class="mt-5">TUAN NGUYEN</h1>
        <h3>Software Developer</h3>
    </b-container>
    

    <b-container fluid id="page1">
      <p>1</p>
    </b-container>

    <b-container fluid id="page2">
      <p>2</p>
    </b-container>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

html, body {
  background-image: linear-gradient(to right, #cee8fd , #ece6ff);
  /* background-image: linear-gradient(to right, #86C6F9 , #CAB7FF); */   /* heavy */
  /* background-image: linear-gradient(to right, #cee8fd , #ece6ff); */   /* light */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#page0 {
  height: 100vh;
}

#page1 {
  height: 100vh;
  background-color: red;
}

#page2 {
  height: 100vh;
  background-color: pink;
}

</style>
