<template>
	<div class="home">
	  <div class="principalback container-fluid">
	    <div class="capa"></div>
	    	<div class="container">
			    <div class="row">
			    	<div class="col-md-8">
			    		<div class="textbox">
			    			<div class="text">
				    			<span>What's your opinion on</span>
				    			<h1>Pope Francis?</h1>
				    			<p>He's talking touch on clergy sexual abuse, but is he just another papal pervert protector? (thums down) or true pedophile punishing pontiff? (thumbs up)</p>
				    			<a href="#">More information</a>
				    			<h4>What's Your Verdict?</h4>
				    		</div>
			    			<div class="down_up_row">
			    				<div class="uphand">
			    					<ThumbUp/>
			    				</div>
			    				<div class="downhand">
			    					<ThumbDown/>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    	<div class="col-md-4"></div>
			    </div>
			</div>
		<div class="bardays">
			<div class="closingin">
				CLOSING IN
			</div>
			<div class="days">
				<div class="littlething"></div>
				<span>22</span>  days
			</div>
		</div>
	  </div>
	  <div class="container contentbox">
	  	<div class="addmsg">
	  		<div>
	  			<p>Speak out. Be heard.</p>
	  			<span>Be Counted</span>
	  		</div>
	  		<div>
	  			Rule of Thumb is a crowd sourced court of public opinion where anyone and evryone can speak freely.It´s easy: You sahre your opinion, we analyze and put data in public report.
	  		</div>
	  		<div>
	  			<b-btn-close></b-btn-close>
	  		</div>
	  	</div>
	  	<h3 class="votest">Votes</h3>
	  	<section class="votessection">
	  		<article :id="'art'+vote.id" :class="(index%2==0)? 'marginart' : ''" :key="index" v-for="(vote,index) in votes" :style="{ backgroundImage: 'url(' + vote.img + ')' }">
	  			<div class="capaart"></div>
	  			<div class="arttext">
		  			<h3>{{vote.name}}</h3>
		  			<p class="monthtext"><span> 1 month ago in</span>{{vote.area}}</p>
		  			<p v-if="vote.votenow==='false'">{{vote.msg}}</p>
		  			<p v-else>Thank you for voting!</p>
		  			<div class="updown_buttos">
		  				<button v-show="vote.votenow!='true'" @click="votebutton($event,vote.id)" class="upbutton"><ThumbUp/></button>
		  				<button v-show="vote.votenow!='true'" @click="votebutton($event,vote.id)" class="downbutton"><ThumbDown/></button>
		  				<button @click="votenowe(vote.id)" class="votenow">{{vote.textbuttonnow}}</button>
		  			</div>
	  			</div>
	  			<div class="down_up_row_art">
	  				<div class="porcup" :style="{width:vote.porcup+'%'}">
	  					<div class="barboxup">
	  						<ThumbUp/>
	  						{{vote.porcup+'%'}}
	  					</div>
	  				</div>
	  				<div class="porcdown" :style="{width:vote.porcdown+'%'}">
	  					<div class="barboxdown">
		  					<ThumbDown/>
		  					{{vote.porcdown+'%'}}
	  					</div>
	  				</div>
	  			</div>
	  		</article>
	  	</section>
	  	<div class="row subsection">
	  		<div class="col-md-8 subtext">
	  			<h3>Is there anyone else you would want us to add?</h3>
	  		</div>
	  		<div class="col-md-4 subname">
	  			<button>Submit a Name</button>
	  		</div>
	  	</div>
	  </div>
	</div>
</template>
<style scoped>
@import '../css/homestyles.css'
</style>
