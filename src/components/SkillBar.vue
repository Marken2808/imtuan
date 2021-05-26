<template>
    <div>
      <b-container fluid>
        <b-row cols="2" class="my-3 align-items-center justify-content-center">
            <b-col md="3" lg="2" v-b-popover.hover.right :title="title">
            
              <b-avatar                 rounded :src="imgURL1" size="40"></b-avatar>
              <b-avatar v-if="imgURL2"  rounded :src="imgURL2" size="40" class="ml-1"></b-avatar>

            </b-col>
            <b-col md="9" lg="10">
              <b-progress show-value height="30px" :value=value variant="success" striped :animated="true"></b-progress>
            </b-col>
        </b-row>
      </b-container>
    </div>
</template>


<script>
export default {
  name: 'ResumePage',
  props: {
    title: String,
    value: Number,
    imgURL1: String,
    imgURL2: String,
  }
}
</script>

<style scoped>
  .avt {
    background-image: -webkit-linear-gradient(left, #CAB7FF, #86C6F9);
    padding: 5px;
  }
</style>
