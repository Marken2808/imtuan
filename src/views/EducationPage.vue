<template>
  <div>

<!-- Education -->
      <div id="Education" class="full-height">
        <p>Education</p>

        <b-container fluid>
          <b-row class="justify-content-center align-items-center" cols="2" >
            <b-col cols="2" >
              <b-button-group vertical v-b-scrollspy:testButton id="buttonGroup" class="justify-content-center align-items-center" >
                
                <b-button pill v-for="(btn, idx) in buttons" :key="idx" :pressed.sync="btn.state" variant="white" :href="btn.href">
                  <b-icon icon="circle" />
                </b-button>
                <hr>


                <!-- <b-button pill href="#list-item-2">
                  <b-icon icon="circle" />
                </b-button>
                <hr>


                <b-button pill href="#list-item-3">
                  <b-icon icon="circle" />
                </b-button>
                <hr>


                <b-button pill href="#list-item-4">
                  <b-icon icon="circle" />
                </b-button>
                <hr>


                <b-button pill href="#list-item-5">
                  <b-icon icon="circle" />
                </b-button>
                <hr> -->

              </b-button-group>
            </b-col>

            <b-col cols="7" md="8" lg="9">
              <div id="testButton" data-bs-target="#buttonGroup" style="position:relative; overflow-y:auto; height:500px">
              <!-- <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:500px"> -->
                <h4 id="list-item-1">Item 1</h4>
                <p>{{ text }}</p>
                <h4 id="list-item-2">Item 2</h4>
                <p>{{ text }}</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>{{ text }}</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>{{ text }}</p>
                <h4 id="list-item-5">Item 5</h4>
                <p>{{ text }}</p>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>   

      
      <hr class="m-0"/>

  </div>
</template>


<script>
export default {
  name: 'EducationPage',
  data() {
    return {
      buttons:[
        {href: "#list-item-1", state: false},
        {href: "#list-item-2", state: false},
        {href: "#list-item-3", state: false},
        {href: "#list-item-4", state: false},
        {href: "#list-item-5", state: false},
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
