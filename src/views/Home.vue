<template>
  <div class="columns">
    <div class="column is-2">
      <div class="column">hi</div>
      <div class="column">hi</div>
    </div>

    <div class="column is-10">
      <div class="columns is-multiline">
        <div :class="setVerbClass(verb.type)" v-for="verb in filteredVerbs" :key="verb.id">
          <p>{{verb.name}}</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'


export default {
  data() {
    return {
      
    }
  },
  methods: {
    setVerbClass(type) {
      return type === 'regular' ? "column is-1 regular" : "column is-1 irregular"
    }
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
    },
  },
  mounted() {
    //console.log(this.$store.getters['verbs/verbs'])
  }
}
// background color 
// pink irregular
</script>

<style scoped>
.regular:hover {
  background-color: #4DABF7;
  color: white;
}
.irregular:hover {
  background-color: pink;
  color: white;
}
</style>







