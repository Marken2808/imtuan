<template>
  <div>

<!-- Resume -->
    <div id="Resume" class="full-height">
      <b-avatar :src="require('@/assets/emiu.png')" size="200" class="avt"></b-avatar>
      <h1 class="mt-3">TUAN NGUYEN</h1>
      <h3>Software Developer</h3>
    </div>
    <hr class="m-0"/>

  </div>
</template>


<script>
export default {
  name: 'ResumePage',
}
</script>

<style scoped>
  .avt {
    background-image: -webkit-linear-gradient(left, #CAB7FF, #86C6F9);
    padding: 5px;
  }
</style>
