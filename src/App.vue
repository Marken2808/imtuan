<template #lead>

  <div id="app">
    <b-container fluid id="page0">
        <b-avatar :src="require('@/assets/Messi_avt.jpg')" size="200"></b-avatar>
        <h1 class="mt-3">TUAN NGUYEN</h1>
        <h3>Software Developer</h3>
    </b-container>
    
    
    <b-container fluid id="page1">
      <p>page1</p>
    </b-container>

    <b-container fluid id="page2">
      <p>page2</p>
    </b-container>

  </div>
</template>

<script>
// import Avatar from '@/assets/Messi_avt.jpg';

export default {
  name: 'App',
  components: {
  },
  // data: function() {
  //   return {
  //     image: Avatar,
  //   }
  // }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
