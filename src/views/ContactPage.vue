<template>
  <div>

<!-- Contact -->
    <div id="Contact" class="full-height">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            :state="true"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            :state="true"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      
    </div>   
    <hr class="m-0"/>

  </div>
</template>


<script>
export default {
  name: 'ContactPage',
  data() {
      return {
        form: {
          email: '',
          name: '',
          message: '',
        },
        show: true
      }
    },
}
</script>
