<template>
	<div id="app">
		<img src="./assets/logo.png">
		<h1></h1>
		<h1>Easy-Electron</h1>
		<h2>快速构建Electron+vue的CLI</h2>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Welcome to Your Easy-Electron'
			}
		},
		created() {
			console.log(this.$ipc)
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	img{
		width: 300px;
	}
	h1, h2 {
		font-weight: normal;
	}
</style>
