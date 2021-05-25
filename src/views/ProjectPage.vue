<template>
  <div>

<!-- Project -->
      <div id="Project" class="full-height my-4">
        <p>Project</p>

<!-- end test -->

        <b-container fluid>
          
          <b-row class="justify-content-center" cols="1" cols-sm="2" cols-md="2" cols-lg="3">
            
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
}
</script>
