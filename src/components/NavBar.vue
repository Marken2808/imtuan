<template>
  <div>

<!-- NAVBAR -->
    <b-navbar v-b-scrollspy toggleable="md" type="light" id="navbar" class="nav nav-pills fixed-top">
      
      <b-navbar-brand href="/" class="p-0">
        <img :src="require('@/assets/logo.jpg')" width="40" alt="Kitten">
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#Resume">Resume</b-nav-item>
          <b-nav-item href="#Education">Education</b-nav-item>
          <b-nav-item href="#Experience">Experience</b-nav-item>
          <b-nav-item href="#Skill">Skill</b-nav-item>
          <b-nav-item href="#Project">Project</b-nav-item>
          <b-nav-item href="#Contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>

  </div>
</template>


<script>
export default {
  name: 'NavBar',
}
</script>
