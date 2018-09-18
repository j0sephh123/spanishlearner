<template>
  <div class="columns">
    
    <div class="column is-2">
      <div
        @click="setFilter('regular')" 
        class="column filterItem">regular</div>
      <div
        @click="setFilter('irregular')" 
        class="column filterItem">irregular</div>
    </div>

    <div class="column is-10">
    <search-bar></search-bar>
      <span
        v-show="filter !== ''"
        class="tag is-info is-rounded"
        >filter: {{filter}}
        <button 
          @click="setFilter('')"
          class="delete is-small"></button>
      </span>
      <div class="columns is-multiline">
        <div :class="setVerbClass(verb.type)" v-for="verb in filteredVerbs" :key="verb.id">
          <div class="title is-3">{{verb.name}}</div>
          <button class="button conjugation">conjugation</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import SearchVue from '../components/Search';

export default {
  components: {
    searchBar: SearchVue
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions({
      setFilter: 'verbs/setFilter'
    }),
    setVerbClass(type) {
      return type === 'regular' ? "column is-2 regular has-text-centered" : "column is-2 irregular has-text-centered"
    }
  },
  computed: {
    ...mapGetters({
      verbs: 'verbs/verbs',
      filter: 'verbs/filter'
    }),
    filteredVerbs() {
      return (
        this.$store.getters['verbs/verbs'].filter(todo => 
          todo.name.match(this.$store.getters['verbs/search'])
        )
      )
    },
  },
  mounted() {

  }
}

</script>

<style scoped>
.regular>.title:hover {
  background-color: #4DABF7;
  color: white;
  cursor: pointer;
}
.irregular>.title:hover {
  background-color: pink;
  color: white;
  cursor: pointer;
}

.filterItem:hover {
  cursor: pointer;
  background-color: lightgrey;
} /* for the left menu */


</style>







