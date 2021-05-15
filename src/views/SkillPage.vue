<template>
    <div>

 <!-- Skill -->
      <div id="Skill" class="full-height px-4">
        <p>Skill</p>

        <b-container fluid class="bv-example-row justify-content-center">

          <SkillBar title="Java" value="75" 
            imgURL1="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem-1080x675.jpg"
          />

          <SkillBar title="Swift" value="60" 
            imgURL1="https://developer.apple.com/swift/images/swift-og.png"
          />

          <SkillBar title="Python" value="35" 
            imgURL1="https://upload.wikimedia.org/wikipedia/commons/c/cb/Python_for_iOS_App_Icon.png"
          />

          <SkillBar title="C / C++" value="30" 
            imgURL1="https://cdnp1.stackassets.com/dbd8b662370e2dd5283d3f352802c43c79b15f8d/store/opt/596/298/abf733ad50de70c3ad93f8b34f894876f93318a2aff76ccc7504ecce0fc1/product_16032_product_shot_wide_image.jpg"
            imgURL2="https://www.redbytes.in/wp-content/uploads/2018/05/c.jpg"
          />

          <SkillBar title="Spring" value="55" 
            imgURL1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbWQzmqoxhnCahnJU7zEKSQ9Z63M3BeHzm-cDxC6ohFTNFFsb8pffFh6FuMx5yU0fGkc&usqp=CAU"
          />

        </b-container>

      </div>
      <hr class="m-0"/>
    </div>
</template>

<script>

import SkillBar from '@/components/SkillBar.vue'

export default {
  name: 'SkillPage',
  components: {
    SkillBar
  }
}
</script>