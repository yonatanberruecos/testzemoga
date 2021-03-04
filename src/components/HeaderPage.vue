<template>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-4 logocolumn">
					<p>Rule of Thumb.</p>
				</div>
				<div class="col-md-8 navcolumn">
					<nav id="nav">
					    <router-link to="/">Past Trials</router-link>
					    <router-link to="/about">How it Works</router-link>
					    <router-link to="/about">Log In / Sign Up</router-link>
					    <b-icon icon="search"></b-icon>
				    </nav>
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

.logocolumn p {
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
</style>
