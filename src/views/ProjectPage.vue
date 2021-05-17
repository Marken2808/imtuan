<template>
  <div>

<!-- Project -->
      <div id="Project" class="full-height my-4">
        <p>Project</p>

<!-- test hover -->
        <div v-b-hover="handleHover" class="border rounded py-3 px-4">
          <b-icon v-if="isHovered" icon="battery-full" scale="2"></b-icon>
          <b-icon v-else icon="battery" scale="2"></b-icon>
          <span class="ml-2" :class="isHovered ? 'text-danger' : ''">Hover this area</span>
        </div>
<!-- end test -->

        <b-container>
          
          <b-row class="justify-content-center" cols="1" cols-sm="2" cols-md="3" cols-lg="3">
            
            <ProjectCard cardImg="Poster.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

            <ProjectCard cardImg="Scan.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

            <ProjectCard cardImg="Profile.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

            <ProjectCard cardImg="Wallet.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

            <ProjectCard cardImg="Poster.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

            <ProjectCard cardImg="Profile.png" 
              text="Some quick example text to build on the card and make up the bulk of the card's content."
            />

          </b-row>
          
        </b-container>
      </div>
      <hr class="m-0"/>


  </div>
</template>


<script>

import ProjectCard from "../components/ProjectCard"

export default {
  name: 'ProjectPage',
  components: {
    ProjectCard
  },
  data() {
      return {
        isHovered: false
      }
    },
    methods: {
      handleHover(hovered) {
        this.isHovered = hovered
      }
    }
}
</script>
