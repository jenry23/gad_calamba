<template>
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <div class="navbar-brand">GAD</div>
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
                <br />
                <div class="row">
                    <div class="col-md-4">
                        <img class="img-fluid" style="width: 100px; height: 50px" src="/images/gad-logo-login.png" />
                    </div>
                    <div class="col-md-8">
                        <h5 v-if="!$can('powered_gad_access')">
                            DATABASE <br />POWERED <br />
                            BY GAD
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        toggleSidebar () {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
    },
};
</script>
