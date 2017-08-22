<style lang="scss">
@import "../../../sass/_variables.scss";

.md-sidenav-content {
	width: 200px !important;
	pointer-events: auto !important;
	border-right: 1px solid #ccc;
}

</style>
<template>

<nav>
  	<div class="md-hide-medium-and-up">
	  	<md-toolbar>
			<md-button class="md-icon-button" @click.native="toggleLeftSidenav">
		  		<md-icon>menu</md-icon>
			</md-button>
			<h2 class="md-title" style="flex: 1">CODE_Sarah</h2>
			<md-button>Sign In</md-button>
	  	</md-toolbar>

	  	<md-sidenav  class="md-left" ref="leftSidenav">
	    	<naviSide></naviSide>
	  	</md-sidenav>  		
  	</div>

	<div class="md-hide-small md-hide-xsmall">
		<md-sidenav>
			<naviSide></naviSide>
		</md-sidenav>
	</div>
</nav>

</template>

<script>
	import naviSide from './naviSide.vue'

	export default {
        components: {
            naviSide
        },

		methods: {
			toggleLeftSidenav() {
				this.$refs.leftSidenav.open();
			},
			open(ref) {
				console.log('Opened: ' + ref);
			},
			close(ref) {
				console.log('Closed: ' + ref);
			}
		}
	};
</script>
