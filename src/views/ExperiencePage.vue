<template>
  <div>

<!-- Experience -->
      <div id="Experience" class="full-height my-4">
        <b-container v-for="(work, idx) in workplace" :key="idx" fluid>
          <b-button v-b-toggle="work.id" class="mt-5 w-100">
            {{work.year}}
          </b-button>

          <b-collapse visible :id="work.id">
            <b-card  header-tag="header"  v-for="(job, idx) in work.jobs" :key="idx">

              <template #header>
                <h5 class="m-0">{{work.company}}
                  <span> | {{work.location}}</span>
                </h5>
                
                <blockquote class="m-0 blockquote">
                  <footer class="blockquote-footer">{{job.type}}</footer>
                </blockquote>
              </template>

              <b-card no-body class="my-2">
                <b-row cols="1" class="align-items-sm-center align-items-md-stretch">

                  <b-col md="3" class="d-md-flex align-self-md-stretch">
                    <b-card-header class="w-100" >
                      {{job.title}}
                    </b-card-header>
                  </b-col>

                  <b-col md="9" class="text-break" >
                    <b-card-body>
                      {{job.des}}
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
              
            </b-card>
          </b-collapse>
        </b-container>
      </div>   
      <hr class="m-0"/>

  </div>
</template>


<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      workplace:[
        {
          id: "1", year: "Jan 2021 – Present",  location: "Ho Chi Minh city, Vietnam",
          company: "The Huy Software Solutions",
          jobs: [
            { 
              title : "Java Developer",
              type: "Part-time (Remote)",
              des : "Developing Bookstore Management website by Java, Spring Boots, MySQL."  
            },
          ]
        }, 
        {
          id: "2", year: "May 2020 – Oct 2020",  location: "Ho Chi Minh city, Vietnam",
          company: "DXC Technology",
          jobs: [
            { 
              title : "Software Developer",
              type: "Internship",
              des : "Developing Real Estate webpage by Vue.js, Bootstrap, Firebase."  
            },
          ]
        },
        {
          id: "3", year: "May 2019 – Jan 2020",  location: "Eastgate, Bristol, England",
          company: "Kentucky Fried Chicken (KFC)",
          jobs: [
            { 
              title : "Team member",
              type: "Part-time",
              des : "Serving, cooking food, and assembling orders."  
            },
          ]
        },
        {
          id: "4", year: "Jun 2019 - Aug 2019",  location: "Fishponds, Bristol, England",
          company: "The Best Connection (TBC)",
          jobs: [
            { 
              title : "Warehouse Operative",
              type: "Contract temporary",
              des : "Handling the full range of goods by DPD and its Marketplace sellers following DPD's internal processes and procedures and using radio frequency scanners. Relocating whole products after wrapping using forklifts, pump truck."  
            },
          ]
        },
        {
          id: "5", year: "Jan 2017 – Aug 2018",  location: "Ho Chi Minh city, Vietnam",
          company: "Surveying design construction company limited",
          jobs: [
            { 
              title : "IT Supporter",
              type: "Part-time",
              des : "Developing Facebook chatbots messenger with Chatfuel and Php. Editing content video by adobe premiere, after effects."  
            },
          ]
        },       
      ],
    }
  }
}
</script>
