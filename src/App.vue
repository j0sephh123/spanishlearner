<template>
  <div>
    <div>
      <search-bar></search-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchVue from './components/Search.vue';

export default {
  components: {
    searchBar: SearchVue
  },
  // mounted() {
  //   console.log('a')
  // } 
}
</script>

 
