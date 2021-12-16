<template>
  <nav
    class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-brand">
          {{ $t($route.meta.title) }}
        </div>
      </div>
      <autocomplete></autocomplete>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
        :class="{ toggled: $sidebar.showSidebar }"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
      <!-- Collapsable -->
      <div>
        <br>
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid"
              style="width: 50px; height: 50px"
              src="/images/gad-logo-login.png"
            />
          </div>
          <div class="col-md-9">
            <h5>DATABASE POWERED BY GAD</h5>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
  },
};
</script>
