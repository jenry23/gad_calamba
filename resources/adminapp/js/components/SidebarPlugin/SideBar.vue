<style scoped>
.sidebar {
    overflow-y: auto;
}
</style>
<template>
    <div
        class="sidebar"
        :data-background-color="backgroundColor"
        :data-image="backgroundImage"
        :data-color="itemColor"
    >
        <div class="logo">
            <a href="/" class="logo-normal">
                <div v-if="roles.title === 'Popcom'" class="d-flex justify-content-center">
                    <img class="img-fluid" src="/images/popcom.png" />
                </div>
                <div v-else-if="roles.title === 'Barangay'" class="d-flex justify-content-center">
                    <img class="img-fluid" :src="user.photo[0].url" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <img class="img-fluid" src="/images/gad-logo-login.png" />
                </div>
            </a>
            <center>
                <b>
                    <div v-if="roles.title === 'Popcom'">
                        <h1 style="color: black">POPCOM</h1>
                    </div>
                    <div v-else-if="roles.title === 'Barangay'">
                        <h1 style="color: black">{{ user.barangays.barangay_name }}</h1>
                    </div>
                    <div v-else>
                        <h1 style="color: black">GAD</h1>
                    </div>
                </b>
            </center>
        </div>
        <div class="sidebar-wrapper">
            <slot name="content"></slot>
            <ul class="nav">
                <slot>
                    <template v-for="(item, i) in sidebarLinks" class="sidebar">
                        <sidebar-item-group v-if="item.children && $can(item.gate)" :key="`group-${i}`" :item="item">
                        </sidebar-item-group>

                        <sidebar-link v-else :key="`item-${i}`" :item="item"></sidebar-link>
                    </template>
                </slot>
            </ul>

            <ul class="nav">
                <li class="nav-item">
                    <a href="#" class="nav-link" @click.prevent="logout">
                        <i class="material-icons">power_settings_new</i>
                        <p>{{ $t('global.logout') }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-background" :style="sidebarStyle"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'panel.site_title'
        },
        backgroundImage: {
            type: String,
            default: '/md/img/calamba.jpg'
        },
        imgLogo: {
            type: String,
            default: '/images/gad-logo-login.png'
        },
        // backgroundColor: {
        //     type: String,
        //     default: 'black',
        //     validator: value => {
        //         let acceptedValues = ['', 'white', 'black']
        //         return acceptedValues.indexOf(value) !== -1
        //     }
        // },
        // itemColor: {
        //     type: String,
        //     default: 'green',
        //     validator: value => {
        //         let acceptedValues = [
        //             '',
        //             'purple',
        //             'azure',
        //             'green',
        //             'orange',
        //             'rose',
        //             'danger'
        //         ]
        //         return acceptedValues.indexOf(value) !== -1
        //     }
        // },
        sidebarLinks: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            user: [],
            roles: [],
            backgroundColor: 'white',
            itemColor: 'azure',
        }
    },
    computed: {
        sidebarStyle () {
            return {
                backgroundImage: `url(${this.backgroundImage})`
            }
        }
    },
    mounted () {
        this.getUserDetails();
    },

    methods: {
        logout () {
            axios
                .request({ baseURL: '/', url: 'logout', method: 'post' })
                .then(() => location.assign('/'))
        },
        getUserDetails () {
            axios.get('users/get-user-details').then(response => {
                this.user = response.data.data
                this.roles = this.user.roles[0];
                if (this.roles.title === 'Barangay') {
                    this.backgroundColor = 'white';
                    this.itemColor = 'azure';
                }
            });
        }
    }
}
</script>

<style>
@media screen and (min-width: 991px) {
    .nav-mobile-menu {
        display: none;
    }
}
</style>
