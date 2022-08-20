<template>
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
        <div class="container-fluid">
                <div class="col-md-3">
                    <img src="/images/topbar.png">
                </div>
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
                <br />
                    <div class="col-md-12" style="margin-left: 7%;">
                        <autocomplete></autocomplete>
                    </div>
        </div>
    </nav>
</template>
<style>
.topbar-image {
	background: url('/images/topbar.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
<script>
export default {
    methods: {
        toggleSidebar () {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
    },
};
</script>
