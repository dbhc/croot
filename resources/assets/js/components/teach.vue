<style lang="scss">
@import "../../sass/_variables.scss";


.main-school {
	padding: 100px 0;

	h1 {
		font-weight: 600;
		line-height: 1.4em;
	}


	.main-school-profile {
		display: flex;
		flex-wrap: wrap;
		margin-top: 50px;

		img {
			height: 20%;
			min-height: 100px;
			width: 20%;
			min-width: 100px;
			padding: 20px;
		}

	}
}

.md-dialog {
	max-width: 500px;
}


</style>
<template>

<div>

	<md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
	  	<md-dialog-title>Become a Teacher | Apply NOW</md-dialog-title>

	  	<md-dialog-content>
			<p>We are excited to have you be part of our community of Collo Teachers. We want to make sure you are best represented on our platform. Let's get the converstaion started.</p><br>

			<p>Say hello to us  at <a href="mailto:teachers@collorecruiting.com">teachers@collorecruiting.com</a> and let's get started on showing your talent to the teaching world.</p>
		</md-dialog-content>

	  	<md-dialog-actions>
	    	<md-button class="md-primary" @click.native="closeDialog('dialog1')">Close</md-button>
	  	</md-dialog-actions>
	</md-dialog>

	<nav>
		<div class="container">
			<div class="nav-content v-center">
				<span style="flex:1;"><a href="/"><img style="height: 60px;" src="/images/logo.png"></a></span>
				<md-button id="custom" @click.native="openDialog('dialog1')">Contact Us</md-button>
			</div>
		</div>
	</nav>   	
	<div class="main-header">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-9 main-header-content">
					<h1 style="font-size: 5em;">Get a Job Teaching Students Around the World</h1>
					<p style="margin: 20px 0px;">Canada &nbsp; | &nbsp; Korea &nbsp; | &nbsp; Japan &nbsp; | &nbsp; China &nbsp; | &nbsp; US</p>
					<md-button class="md-raised" style="margin-left: 2px;" id="custom" @click.native="openDialog('dialog1')">Start Teaching Now</md-button>
				</div>
			</div>
		</div>
	</div>
	<div class="main-process">
		<div class="container">
			<div class="row text-center">
				<h1 style="font-weight: 300;">The Collo Recipe</h1>
				<p>The Collo special ingredient for getting hired is simple: you. We have a network of students, schools and fellow educators who work to best represent yourself as a teacher. Plus, we have resources to help you from your first click to join Collo to the moment your career takes flight!</p>
			</div>
			<div class="row main-process-value">
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">person_outline</md-icon>
					<h4>Representation</h4>
					<p>We create your presence online. We go beyond just your simple online resume. Your profile will spice up your qualifications with highlighted skillsets matched to the schools and programs working with us.</p>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">all_inclusive</md-icon>
					<h4>Recognition</h4>
					<p>As a teacher in the Collo community you will get a chance to get teaching experience, acquire feedback on your teaching style and be recognized for your talent. These students will endorse you, giving you a confident recommendation about you.</p>					
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">lightbulb_outline</md-icon>
					<h4>Culture</h4>
					<p>The Collo community is comprised of Korean experts. They have studied, experienced and lived in Korea and are ready to share their expertise with you. We make sure that their take on the culture, language and living style reflect best to your style so that you are ready to teach, live and experience Korea. </p>						
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">domain</md-icon>
					<h4>Ready</h4>
					<p>After the complete experience of presenting yourself through Collo, you will be ready to go to abroad. We will make sure you teach with confidence in your abilities, educate at a school you know, experience the city you live in and expand your career to a global scale.</p>						
				</div>
			</div>
		</div>
	</div>
	<div class="main-cta">
		<div class="container">
			<div class="row text-center">
				<h1>Contact Us for a FREE Consulation</h1>
				<md-button class="md-raised" style="margin-top: 50px;" id="custom" @click.native="openDialog('dialog1')">Get Started Now</md-button>
			</div>
		</div>
	</div>
	<div class="main-school">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-7 col-md-5">
					<h1>Teaching Opportunities. 
					<br>Programs &amp; Schools.</h1>
					<p>Collo finds the best of the best programs and schools that are willing to work with talented english teachers across the world.</p>
				</div>
				<div class="hidden-xs hidden-sm col-md-offset-2 col-md-3 text-right">
					<img style="margin-top: -20px;" src="/images/logo.png">
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 main-school-profile">
					<img src="/images/epik.jpg">
					<img src="/images/talk.png">
					<img src="/images/elt.jpg">
				</div>
			</div>
		</div>
	</div>
	<div class="main-about">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-6">
					<h1><b>Our Story</b></h1>
					<p>The underlying mission and vision of Collo is to help talented teachers be discovered through our platform. In the increasingly competitive world of English education, it is becoming harder to be found through all the noise than ever. With Collo, we help schools find teachers around the world by breaking down the difficulties created by geographical, cultural, and language barriers. We want to revolutionize the archaic recruitment processes in English education with an online platform that will streamline the recruitment process; reducing costs, saving time, and leading to more quality hires.</p>
				</div>
				<div class="col-xs-12 col-md-offset-2 col-md-4">
					<h1 style="font-weight:300;">Contact Us</h1>
					<div class="main-contact-category">
						<h4 style="font-weight:300;">General Inquiries</h4>
						<h5>team@collorecruiting.com</h5>						
					</div>

					<div class="main-contact-category">
						<h4 style="font-weight:300;">Find a Hire</h4>
						<h5>hire@collorecruiting.com</h5>
					</div>
					<div class="main-contact-category">
						<h4 style="font-weight:300;">Become a Teacher</h4>
						<h5>teachers@collorecruiting.com</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main-filler">
		<div class="container-fluid">
			<div class="row no-gutter">
				<div class="col-xs-12 col-md-6 main-filler-left">
					&nbsp;
				</div>
				<div class="hidden-xs hidden-sm col-md-6 main-filler-right">
					&nbsp;
				</div>
			</div>
		</div>		
	</div>
	<div class="footer">
		<div class="container text-center">
			<h5 style="font-weight: 300; margin-top: 18px">&copy; Collo 2017 &nbsp; | &nbsp; All Rights Reserved</h5>
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
