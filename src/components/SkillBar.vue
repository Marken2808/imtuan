<template>
    <div>

        <b-row cols="2" class="my-3 align-items-center justify-content-md-center">
            <b-col col md="3" lg="2" v-b-popover.hover.right :title="title">
            
              <b-avatar                 rounded :src="imgURL1" size="45"></b-avatar>
              <b-avatar v-if="imgURL2"  rounded :src="imgURL2" size="45" class="ml-2"></b-avatar>

            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value=value variant="success" striped :animated="true"></b-progress>
            </b-col>
        </b-row>

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
