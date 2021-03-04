<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-4 logocolumn">
					<p class="logostyle">Rule of Thumb.</p>
				</div>
				<div class="col-md-8 navcolumn">
					<nav id="nav">
					    <router-link to="/">Past Trials</router-link>
					    <router-link to="/about">How it Works</router-link>
					    <router-link to="/signup">Log In / Sign Up</router-link>
					    <b-icon icon="search"></b-icon>
				    </nav>
				</div>
				<div class="col-md-12 mobilemenu">
					<b-navbar toggleable type="dark" variant="dark">
					    <b-navbar-brand href="#"><p class="logostyle">Rule of Thumb.</p></b-navbar-brand>

					    <b-navbar-toggle target="navbar-toggle-collapse">
					      <template #default="{ expanded }">
					        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
					        <b-icon v-else icon="chevron-bar-down"></b-icon>
					      </template>
					    </b-navbar-toggle>

					    <b-collapse id="navbar-toggle-collapse" is-nav>
					      <b-navbar-nav class="ml-auto">
					        <router-link to="/">Past Trials</router-link>
					        <router-link to="/about">How it Works</router-link>
					        <router-link to="/signup">Log In / Sign Up</router-link>
					        <b-icon icon="search"></b-icon>
					      </b-navbar-nav>
					    </b-collapse>
					  </b-navbar>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>

<style scoped>
header {
	color: #ffffff;
}
.logocolumn, .navcolumn {
	z-index: 1;
}

.logostyle {
	padding: 40px 0px 40px 0px;
    font-size: 32px;
    text-align: left;
    font-weight: bold;
}

#nav {
  color: #ffffff;
  text-align: right;
  padding: 50px 0px 50px 0px;
}

#nav a, #nav a.router-link-exact-active {
  color: #ffffff;
  margin-left: 50px;
  text-decoration: none;
}
#nav a:hover {
	text-decoration: underline;
}

.b-icon.bi {
	font-size: 24px;
	margin-left: 50px;
}
.navbar {
	z-index: 1;
	background-color: transparent !important;
}
.navbar-nav a {
	color: #ffffff;
	font-size: 16px;
}
#navbar-toggle-collapse{
	background-color: #676767;
}
@media only screen and (max-width: 991px){
	#nav , .logocolumn, .navcolumn {
	    display: none;
	}

	.b-icon.bi {
	    margin: 0 auto !important;
	 }

	.logostyle {
		padding: 10px 0px 10px 0px;
	    font-size: 20px;
	}
}
</style>
