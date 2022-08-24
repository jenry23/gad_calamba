<template>
	<div v-if="row">
		{{ entry }}
	</div>
	<div v-else></div>
</template>

<script>
	export default {
		props: ['field', 'row'],
		computed: {
			entry () {
				console.log(this.row)
				return this.row[this.field].join();
			}
		}
	}
</script>
