<template>
	<div id="app">
		<div id="title"></div>
		<transition enter-active-class="animated bounceInUp">
			<router-view class="page"></router-view>
		</transition>
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
			// console.log(this.$remote.dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));
			// console.log(this.$remote)
		}
	}
</script>

<style>
	#title{
		height: 20px;
		width: 100%;
		text-align: center;
		font-size: 14px;
		padding: 4px 0 0;
		-webkit-app-region: drag;
	}
</style>
