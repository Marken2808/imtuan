<template>

  <div id="app" class="m-0 p-0">

    <NavBar/>

    <div data-bs-target="#navbar">
      <ResumePage/>
      <SkillPage/>
      <ProjectPage/>
      <EducationPage/>
      <ExperiencePage/>
      <ContactPage/>

    </div>
  </div>
</template>

<script>
// import from components
import NavBar from '@/components/NavBar.vue'

// import from views
import ResumePage from '@/views/ResumePage.vue'
import SkillPage from '@/views/SkillPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import EducationPage from '@/views/EducationPage.vue'
import ExperiencePage from '@/views/ExperiencePage.vue'
import ContactPage from '@/views/ContactPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ResumePage,
    SkillPage,
    ProjectPage,
    EducationPage,
    ExperiencePage,
    ContactPage,
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .nav {
    backdrop-filter: blur(15px);
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link{
    background-color:  #6cbdff !important;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
/* test */
</style>