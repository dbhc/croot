<style lang="scss">
@import "../../sass/_variables.scss";


.v-center {
	display: flex;
	align-items: center;
}

.main-header {
	background: $pastel-blue;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #5B86E5, $pastel-blue);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #5B86E5, $pastel-blue); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	min-height: calc(100vh - 60px);
	padding: 100px 0;
	color: $color-white;

	.main-header-title {
		margin-bottom: 150px;
	}

}


</style>
<template>

<div>

	<nav>
		<div class="container">
			<div class="nav-content v-center">
				<span style="flex:1;"><a href="/"><img style="height: 60px;" src="/images/logo.png"></a></span>
			</div>
		</div>
	</nav>   	
	<div class="main-header v-center">
		<div class="container">
			<div class="row text-center main-header-title">
				<h1 style="font-size: 5em">Collo Recruiting</h1>
				<h3 style="font-weight: 300;">Being the bridge that connects quality teachers with reputable schools around the world.</h3>
			</div>
			<div class="row text-center">
				<div class="col-xs-12 col-sm-6 main-header-teach">
					<h1>Teach Abroad</h1>
					<md-button href="teach" class="md-raised">Apply Now</md-button>
				</div>
				<div class="col-xs-12 col-sm-6 main-header-recruit">
					<h1>Recruit English Teachers</h1>
					<md-button href="recruit" class="md-raised">Hire Now</md-button>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
  	import navi from './navi/navi.vue'

	export default {
	    components: {
	        navi
	    },
	  	methods: {
	    	openDialog(ref) {
	      		this.$refs[ref].open();
	    	},
	    	closeDialog(ref) {
	      		this.$refs[ref].close();
	    	},
	    	onOpen() {
	      		console.log('Opened');
	    	},
	    	onClose(type) {
	      		console.log('Closed', type);
	    	}
	  	}
	};
</script>