<template>
    <div>

 <!-- Skill -->
      <div id="Skill" class="full-height px-4">
        <p>Skill</p>

        <b-container fluid class="bv-example-row justify-content-center">

          <b-row cols="2" class="my-3 align-items-center justify-content-md-center">
            <b-col col md="3" lg="2" v-b-popover.hover.right title="Java">
              <b-avatar rounded src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem-1080x675.jpg" size="45"></b-avatar>
            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value="75" variant="success" striped :animated="true"></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2" class="my-3 align-items-center justify-content-md-center">
            <b-col col md="3" lg="2" v-b-popover.hover.right title="Swift">
              <b-avatar rounded src="https://developer.apple.com/swift/images/swift-og.png" size="45"></b-avatar>
            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value="60" variant="success" striped :animated="true"></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2" class="my-3 align-items-center justify-content-md-center">
            <b-col col md="3" lg="2" v-b-popover.hover.right title="Python">
              <b-avatar rounded src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Python_for_iOS_App_Icon.png" size="45"></b-avatar>
            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value="35" variant="success" striped :animated="true"></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2" class="my-3 align-items-center justify-content-md-center" >
            <b-col col md="3" lg="2" v-b-popover.hover.right title="C / C++">
              <b-avatar class="mx-1" rounded src="https://cdnp1.stackassets.com/dbd8b662370e2dd5283d3f352802c43c79b15f8d/store/opt/596/298/abf733ad50de70c3ad93f8b34f894876f93318a2aff76ccc7504ecce0fc1/product_16032_product_shot_wide_image.jpg" size="45"></b-avatar>
              <b-avatar class="mx-1" rounded src="https://www.redbytes.in/wp-content/uploads/2018/05/c.jpg" size="45"></b-avatar>
              
            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value="30" variant="success" striped :animated="true"></b-progress>
            </b-col>
          </b-row>

          <b-row cols="2" class="my-3 align-items-center justify-content-md-center">
            <b-col col md="3" lg="2" v-b-popover.hover.right title="Spring Framework">
              <b-avatar rounded src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbWQzmqoxhnCahnJU7zEKSQ9Z63M3BeHzm-cDxC6ohFTNFFsb8pffFh6FuMx5yU0fGkc&usqp=CAU" size="45"></b-avatar>
            </b-col>
            <b-col col md="8" lg="8">
              <b-progress show-value height="25px" :value="55" variant="success" striped :animated="true"></b-progress>
            </b-col>
          </b-row>

        </b-container>

        <!-- <div v-b-hover="handleHover" class="border rounded py-3 px-4">
          <b-icon v-if="isHovered" icon="battery-full" scale="2"></b-icon>
          <b-icon v-else icon="battery" scale="2"></b-icon>
          <span class="ml-2" :class="isHovered ? 'text-danger' : ''">Hover this area</span>
        </div> -->

        
      </div>
      <hr class="m-0"/>
    </div>
</template>

<script>
export default {
  name: 'SkillPage',
}
</script>