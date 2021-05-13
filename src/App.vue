<template>

  <div id="app" class="m-0 p-0">

<!-- mine -->
    <b-navbar toggleable="md" type="light" id="navbar" class="nav fixed-top">
      
      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" alt="Kitten">
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#scroll0">Home</b-nav-item>
          <b-nav-item href="#scroll1">Page 1</b-nav-item>
          <b-nav-item href="#scroll2">Page 2</b-nav-item>
          <b-nav-item href="#scroll3">Page 3</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>

    <div data-bs-target="#navbar" >

      <div id="scroll0" class="full-height d-flex flex-column justify-content-center align-items-center">
        <b-avatar :src="require('@/assets/emiu.png')" size="200" class="avt"></b-avatar>
        <h1 class="mt-3">TUAN NGUYEN</h1>
        <h3>Software Developer</h3>
      </div>

      <div id="scroll1" class="full-height bg-warning p-4">
        <p>page1</p>
      </div>

      <div id="scroll2" class="full-height bg-primary">
        <p>page2</p>
      </div>

      <div id="scroll3" class="bg-secondary">
        <p>Footer</p>
      </div>   

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>

  html, body {
    background-image: linear-gradient(to right, #cee8fd , #ece6ff);
    /* background-image: linear-gradient(to right, #86C6F9 , #CAB7FF); */   /* heavy */
    /* background-image: linear-gradient(to right, #cee8fd , #ece6ff); */   /* light */
  }

  .full-height {
    min-height: 100vh;
  }

  .avt {
    background-image: -webkit-linear-gradient(left, #CAB7FF, #86C6F9);
    padding: 5px;
  }

  .nav {
    backdrop-filter: blur(15px);
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
