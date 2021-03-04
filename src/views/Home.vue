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
	  		<article :id="'art'+vote.id" :class="(index%2==0)? 'marginart' : ''" :key="index" v-for="(vote,index) in votesget" :style="{ backgroundImage: 'url(' + vote.img + ')' }">
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

<script>
import ThumbUp from '@/components/ThumbUp.vue'
import ThumbDown from '@/components/ThumbDown.vue'
export default {
  name: 'Home',
  data(){
  	return {
  		textbuttonnow:'Vote now',
  		votes:[
	  			{
	  				id:1,
	  				img:'https://lh3.googleusercontent.com/proxy/DsCmJhgi1ksSytE6nQbcQUnogcMA48HyO5c8ku_i8_4xs8hdjrU4Tfs6E773divTkNqhQpJEYR3PUjAolGbtzW1F2zkZnHGH9aq5gWdlbvfpo8H4J-PpSrU7xSyVow',
	  				name:'Kanye West',
	  				area:'Entertaiment',
	  				msg:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
	  				numup:640,
	  				numdown:360
	  			},
	  			{	
	  				id:2,
	  				img:'https://ep00.epimg.net/tecnologia/imagenes/2016/06/06/actualidad/1465208216_711947_1465209634_noticia_normal.jpg',
	  				name:'Mark Zuckerberg',
	  				area:'Business',
	  				msg:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
	  				numup:360,
	  				numdown:640
	  			},
	  			{	
	  				id:3,
	  				img:'http://withoutbrain.files.wordpress.com/2011/11/cfk3.jpg',
	  				name:'Cristina Fernández de Kirchner',
	  				area:'Politics',
	  				msg:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
	  				numup:360,
	  				numdown:640
	  			},
	  			{	
	  				id:4,
	  				img:'https://estaticos-cdn.elperiodico.com/clip/6e88959c-093a-4427-8b53-47fd149101ee_alta-libre-aspect-ratio_default_0.jpg',
	  				name:'Malala Yousafzai',
	  				area:'Entertaiment',
	  				msg:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
	  				numup:640,
	  				numdown:360
	  			}
  			],
  			votesget:[]
  		}
  	},
  components: {
  	ThumbUp,
  	ThumbDown
  },
  created(){
  	this.rendervotes()
  },
  methods: {
  	rendervotes(){
  		this.votes.forEach((item)=>{
  			let resnumup=item.numup
  			let resnumdown=item.numdown

  			if(localStorage.getItem('votesup-'+item.id)){
  				resnumup=parseInt(localStorage.getItem('votesup-'+item.id))
  			}else {
  				localStorage.setItem('votesup-'+item.id,item.numup)
  			}

  			if(localStorage.getItem('votesdown-'+item.id)){
  				resnumdown=parseInt(localStorage.getItem('votesdown-'+item.id))
  			}else {
  				localStorage.setItem('votesdown-'+item.id,item.numdown)
  			}


  			let barnumup=(resnumup)*100/1000
  			let barnumdown=(resnumdown)*100/1000
  			item.porcup=barnumup
  			item.porcdown=barnumdown
  			
  		
  			if(localStorage.getItem('votenow-'+item.id)==="true"){
  				item.textbuttonnow='Vote again'
  				item.votenow="true"
  			}else {
  				item.textbuttonnow='Vote now'
  				item.votenow="false"
  			}
  		})

  		this.votesget=[...this.votes]
  	},
  	votebutton(event,id){
  		let el=document.querySelector('#art'+id+' .arttext .updown_buttos .active')
  		if(el){
  			el.classList.remove('active')
  		}
  		event.target.classList.add('active')
  	},
  	votenowe(id){
  		let votenowbool=localStorage.getItem('votenow-'+id)

  		if(votenowbool==="true"){
  			localStorage.setItem('votenow-'+id,"false")
  			document.querySelector('.arttext .updown_buttos .active').classList.remove('active')
  			this.rendervotes()
  		}else {
	  		let el=document.querySelector('#art'+id+' .arttext .updown_buttos .active')
	  		if(el){
	  			let votesup=parseInt(localStorage.getItem('votesup-'+id))
	  			let votesdown=parseInt(localStorage.getItem('votesdown-'+id))
		  		if(el.classList.contains('upbutton')){
		  			localStorage.setItem('votesup-'+id,votesup+10)
		  			localStorage.setItem('votesdown-'+id,votesdown-10)
		  		}else if(el.classList.contains('downbutton')){
		  			localStorage.setItem('votesup-'+id,votesup-10)
		  			localStorage.setItem('votesdown-'+id,votesdown+10)
		  		}

		  		localStorage.setItem('votenow-'+id,"true")
		  		this.rendervotes()
		  	}else {
		  		alert('You should chosee thumb up or thumb down firts')
		  	}
  		}
  	}
  }
}
</script>
<style scoped>
@import '../css/homestyles.css'
</style>
