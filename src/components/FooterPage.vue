<template>
	<footer>
		<div class="container">
			<div class="row footerrow">
				<div class="col-md-6">
						<nav id="navfooter">
						    <router-link to="/">Terms and Conditions</router-link>
						    <router-link to="/about">Privacy Policy</router-link>
						    <router-link to="/signup">Contact Us</router-link>
					    </nav>
				</div>
				<div class="col-md-6">
					
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style scoped>
footer {
	height: 90px;
	padding-top: 14px;
}
#navfooter {
	text-align:left;
}
#navfooter a {
	margin-right: 10px;
    font-size: 12px;
    color: gray;
    text-decoration: none;
    font-weight: 600;
}
.footerrow {
	border-top: dotted 1px #000000;
	padding-top: 30px;
}
</style>
