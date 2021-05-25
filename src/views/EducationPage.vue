<template>
  <div>

<!-- Education -->

      <div id="Education" class="full-height my-4">

        <b-container v-for="(edu, idx) in edus" :key="idx" fluid>

          <b-button v-b-toggle="edu.id"  class="mt-5 w-100">
            {{edu.year}}
          </b-button>

          <b-collapse visible :id="edu.id">
            <b-card  header-tag="header" >

              <template #header>
                <h5 >{{edu.uni}}</h5>
                <blockquote class="mb-0 blockquote">
                  <footer class="blockquote-footer">{{edu.archieve}}</footer>
                </blockquote>
              </template>

              <b-card no-body  v-for="(sub, idx) in edu.subject" :key="idx" class="my-2">
                <b-row cols="1" class="align-items-sm-center align-items-md-stretch">

                  <b-col md="3" class="d-md-flex align-self-md-stretch">
                    <b-card-header class="w-100" >
                      {{sub.name}}
                    </b-card-header>
                  </b-col>

                  <b-col md="9" class="text-break" >
                    <b-card-body>
                      {{sub.des}}
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
              
            </b-card>
          </b-collapse>

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
        {
          id: "UWE", year: "2018 - 2021 (Present)", archieve: "1:1 (Expected)",
          uni: "University of the West of England (UWE)",
          subject: [
            { 
              name : "Mobile Applications",
              des : "Learned IOS app by Swift following the MVC, MVVM design pattern of concepts of Object-Oriented Programming (OOP) and control and data structures."  
            },
            { 
              name : "Cryptography",
              des : "Developed application to cracking passwords using Brute Force base on SHA1 and BCH encoding by Java. Developed text encryption app using Pseudo-Random Number Generator, Stream Cipher and Steganography without specific libraries."
            },
            { 
              name : "Enterprise Systems Development",
              des : "Developed backend web for SmartCare Surgery by Java and Jsp/Servlet following the MVC design pattern with a local Java DB Relational database."
            },
            { 
              name : "Object-Oriented Systems Development",
              des : "Developed a stock inventory system by Java, implement UML diagrams. Developed a student accommodation by Java, implement GUI by Javafx."
            },
            { 
              name : "Internet of Things",
              des : "Created mini Tetris game on BBC micro:bit by C. Implement message bus and event handler. Implemented Morse code to communicate by Bluetooth."
            },
            { 
              name : "Design and Analysis of Data Structures and Algorithms",
              des : "Developed the Pediatric Intensive Care Unit program by Python. Read and write data to a CSV file, implemented search algorithm and data structure."
            },
            { 
              name : "Computer and Network Systems",
              des : "Created CPU emulator by C, developed a battleship bot against other students in the leaderboard which communicated with UWE main server."
            },
            { 
              name : "Operating Systems",
              des : "Worked with Ubuntu, understood processes and threads, CPU scheduling, file management and system call. Used Git to push repositories by command line."
            },
          ]
        },
        {
          id: "IU", year: "2016 - 2018", archieve: "1:1 (Achieved)", 
          uni: "International University (IU-VNU)",
          subject: [
            { 
              name : "Principle of Computing",
              des : "Learned operation gate and floating point."  
            },
            { 
              name : "C/C++ Programming in Unix",
              des : "Learned basic C/C++ programming language, creating simple Snake game."
            },
            { 
              name : "Digital Logic Design",
              des : "Learned combinational, sequential logic circuits (flip-flops, counters, registers)."
            },
            { 
              name : "Computer Architecture",
              des : "Learned Assembly, ALU operation and MIPS Encoding applying to Arduino."
            },
          ]

        },        
      ],
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
