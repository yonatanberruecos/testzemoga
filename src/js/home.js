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
  			location.reload()
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
		  		location.reload()
		  	}else {
		  		alert('You should chosee thumb up or thumb down firts')
		  	}
  		}
  	}
  }
}