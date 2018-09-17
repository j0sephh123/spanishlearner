<template>
  <div>
    <ul>
      <li v-for="verb in filteredVerbs" :key="verb.id"
      >{{verb.name}} -> {{verb.meaning}}<hr></li>
    </ul>
    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// start=10
// limit=10

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    ...mapGetters({
      verbs: 'verbs/verbs'
    }),
    filteredVerbs(arg) {
      return (
        this.$store.getters['verbs/verbs'].filter(todo => 
          todo.name.match(this.$store.getters['verbs/search'])
        )
      )
    }
    
  },
  mounted() {
    //console.log(this.$store.getters['verbs/verbs'])
  }
}
</script>







