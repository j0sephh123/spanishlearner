<template>
  <div>
    <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </router-link>
      <div @click="showBurger = !showBurger"
        class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div :class="navbarClass">
      <div class="navbar-start">
        <router-link class="navbar-link" to="/create">
          Create
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" href="">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showBurger: false,
      navbarClass: "navbar-menu is-active"
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {
    showBurger(show) {
      if(show) {
        this.navbarClass = "navbar-menu is-active"
      } else{
        this.navbarClass = "navbar-menu"
      }

    }
  },
  mounted() {
    
  }
}
</script>

<style>
body {
  background-color: #F8F9FA;
}
</style>

 
