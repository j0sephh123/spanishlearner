<template>
  <div class="column is-5 is-offset-3">

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input 
          v-model="name"
          class="input" 
          type="text" 
          placeholder="Text input">
      </div>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select v-model="type">
            <option disabled>Select Type</option>
            <option>regular</option>
            <option>irregular</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <textarea 
          v-model="meaning"
          class="textarea"></textarea>
      </div>
    </div>

  <div class="field is-grouped is-grouped-right">
    <div class="control">
      <button class="button is-link is-outlined">Cancel</button>
    </div>
    <div class="control">
      <button 
        @click="submit({name, type, meaning})"
        class="button is-primary is-outlined">Submit</button>
    </div>
  </div>


  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      name: 'somename',
      type: 'regular',
      meaning: 'somemeaning'
    }
  },
  methods: {
    ...mapActions({
      submit: 'verbs/submit'
    })
  }
}
</script>

