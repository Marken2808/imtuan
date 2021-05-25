<template>
  <div>

    <b-col class="my-3">
        <b-card :img-src="require('@/assets/'+cardImg+'')" img-top>
            <b-card-text>
                {{ text }}
            </b-card-text>
        </b-card>
    </b-col>

  </div>
</template>


<script>
export default {
  name: 'ProjectCard',
  props: {
    cardImg: String,
    text: String,
  }
}
</script>