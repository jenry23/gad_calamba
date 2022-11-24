<template>
	<div
		class="sidebar"
		:data-background-color="backgroundColor"
		:data-image="backgroundImage"
		:data-color="itemColor"
	>
		<div class="logo">
			<a href="/" class="logo-normal">
				<div class="d-flex justify-content-center">
					<img class="img-fluid" :src="backgroundBarangay" style="margin-top: -20px" />
				</div>
			</a>
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
				itemColor: 'green',
			}
		},
		computed: {
			sidebarStyle () {
				return {
					backgroundImage: `url(${this.backgroundImage})`
				}
			},
			backgroundBarangay () {
				let url = '';
				if (this.roles.title === 'Barangay') {
					url = this.user.photo[0].url;
				} else if (this.roles.title === 'Admin') {
					url = '/images/gad-logo.png';
				}
				return url
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
						this.itemColor = 'green';
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
.sidebar .sidebar-wrapper {
	height: calc(100vh - 306px) I !important;
}
</style>
