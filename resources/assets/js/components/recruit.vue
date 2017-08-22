<style lang="scss">
@import "../../sass/_variables.scss";


.main-talent {
	padding: 100px 0;

	h1 {
		font-weight: 600;
		line-height: 1.4em;
	}


	.main-talent-profile {
		display: flex;
		flex-wrap: wrap;
		margin-top: 50px;

		img {
			height: 20%;
			min-height: 100px;
			width: 20%;
			min-width: 100px;
			padding: 20px;
			border-radius: 50%
		}

	}
}

.md-dialog {
	max-width: 500px;
}

</style>
<template>

<div>

	<md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog2">
	  	<md-dialog-title>Recruit a Teacher | Hire NOW</md-dialog-title>

	  	<md-dialog-content>
			<p>We at Collo dedicate ourselves on making sure our teachers are best represented to who they are and how they teach. If you want to learn more about how we curate our list of teachers and/or are interested in working with us to hire talented English teachers, let's start a conversation at <a href="mailto:hire@collorecruiting.com">hire@collorecruiting.com</a></p>
		</md-dialog-content>

	  	<md-dialog-actions>
	    	<md-button class="md-primary" @click.native="closeDialog('dialog1')">Cancel</md-button>
	    	<md-button class="md-primary" @click.native="closeDialog('dialog1')">Ok</md-button>
	  	</md-dialog-actions>
	</md-dialog>

	<nav>
		<div class="container">
			<div class="nav-content v-center">
				<span style="flex:1;"><a href="/"><img style="height: 60px;" src="/images/logo.png"></a></span>
				<md-button id="custom" @click.native="openDialog('dialog2')">Contact Us</md-button>
			</div>
		</div>
	</nav>   	
	<div class="main-header">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-9 main-header-content">
					<h1 style="font-size: 5em;">Get Connected with Quality Teachers Recommended by Real Students</h1>
					<p style="margin: 20px 0px;">Conversation &nbsp; | &nbsp; Lifestyle &nbsp; | &nbsp; Grammar &nbsp; | &nbsp; Pronunciation &nbsp; | &nbsp; Culture</p>
					<md-button class="md-raised" style="margin-left: 2px;" id="custom" @click.native="openDialog('dialog2')">Start Hiring Now</md-button>
				</div>
			</div>
		</div>
	</div>
	<div class="main-process">
		<div class="container">
			<div class="row text-center">
				<h1 style="font-weight: 300;">How Collo Works</h1>
				<p>The Collo platform works by matching the qualities of our teachers to the positions you, as a school, lists. Saving you time and costs in finding the best match within our curated list of talents across the world. We make sure that all our teachers are carefully vetted, evaluated and well adapted to teach at your school.</p>
			</div>
			<div class="row main-process-value">
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">person_outline</md-icon>
					<h4>Quality Hire</h4>
					<p>The online presence of our teachers transparently reflects their qualifications, persona and teaching abilities. Crowdsourcing from Collo’s network of 1500 students/learners allows a statistical confirmation of the teacher’s listed qualities. </p>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">all_inclusive</md-icon>
					<h4>Endorsement</h4>
					<p>The specific skillsets that are sought after from schools and programs in Korea are the key factors evaluated within our platform. The students who directly receive teaching from our teachers give direct feedback about their skillsets that will act as endorsements.</p>					
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">lightbulb_outline</md-icon>
					<h4>Adapted</h4>
					<p>The Collo listed teachers have access to webinars that educate them about the language, culture and lifestyle in Korea. Crowdsourced data from the Collo community always allow a refreshed resource of factors that can prevent the teachers be affected by language, cultural barriers while living and working in Korea.</p>						
				</div>
				<div class="col-xs-12 col-sm-6 col-md-3">
					<md-icon class="md-size-2x">domain</md-icon>
					<h4>Big Data</h4>
					<p>Collo’s student network will provide the schools data about student information in respect to teaching preferences.  Schools will be able matchmake their school and teaching styles to the correct teachers with the data. In additions, schools will be able to alter their teaching staff and styles following learning trends to maintain a competitive edge.</p>						
				</div>
			</div>
		</div>
	</div>
	<div class="main-cta">
		<div class="container">
			<div class="row text-center">
				<h1>Contact Us for a FREE Consulation</h1>
				<md-button class="md-raised" style="margin-top: 50px;" id="custom" @click.native="openDialog('dialog2')">Get Started Now</md-button>
			</div>
		</div>
	</div>
	<div class="main-talent">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-7 col-md-5">
					<h1>Top Talent. 
					<br>On demand.</h1>
					<p>Collo finds the best of the best of teachers so you don't have to. Our teachers are culturally aware and ready to go.</p>
				</div>
				<div class="hidden-xs hidden-sm col-md-offset-2 col-md-3 text-right">
					<img style="margin-top: -20px;" src="/images/logo.png">
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 main-talent-profile">
					<img src="/images/f05.jpeg">
					<img src="/images/f02.jpeg">
					<img src="/images/f03.jpg">
					<img src="/images/f04.jpg">
					<img src="/images/f01.jpeg">	
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
