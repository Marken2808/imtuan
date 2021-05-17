<template>
  <div>

<!-- Education -->

      <div id="Education" class="full-height">
        <p>Education</p>

        <b-container fluid class="bv-example-row">
          <b-row class="justify-content-center align-items-center" cols="2" >
            <b-col cols="3" md="2" >
              <b-button-group vertical v-b-scrollspy id="buttonGroup" class="justify-content-center align-items-center" >
                <b-button pill v-for="(edu, idx) in edus" :key="idx" :pressed.sync="edu.isPressed" :href="'#'+edu.id" variant="faded" class="my-5">
                  <b-icon icon="circle" />
                  <p>{{edu.year}}</p>
                </b-button>
              </b-button-group>

            </b-col>

            <b-col cols="8" md="9">
              <div data-bs-target="#buttonGroup" v-for="(edu, idx) in edus" :key="idx">
              <!-- <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:500px"> -->
                <div :id="edu.id">
                  <h4>{{edu.uni}}</h4>
                  <blockquote class="blockquote">
                  <footer class="blockquote-footer">{{edu.archieve}}</footer>
                  </blockquote>
                </div>
                
                <p>{{ text }}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>   

      
      <hr class="m-0 "/>

  </div>
</template>


<script>
export default {
  name: 'EducationPage',
  data() {
    return {
      edus:[
        {id: "IU", isPressed: false, year: "2016 - 2018", archieve: "1:1 (First Class)", 
          uni: "International University (IU-VNU)",

        },

        {id: "UWE", isPressed: false,  year: "2018 - 2021 (present)", archieve: "1:1 (Expected)",
          uni: "University of the West of England (UWE)"
        },
        
      ],
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    }
  },
  computed: {
    btnState() {
      return this.buttons.map(btn => btn.state)
    }
  }
  
}
</script>

<style scoped>

</style>
