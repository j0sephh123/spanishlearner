<template>
  <div class="field">
    <div class="control">
      <input 
        v-model="search"
        class="input is-info" 
        type="text" 
        placeholder="Search">
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({

    }),
    search: {
      get() {
        return this.$store.state.verbs.search
      },
      set(value) {
        this.$store.commit('verbs/search', value)
      }
    }
  }
}
</script>
