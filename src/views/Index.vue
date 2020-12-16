<template>
	<div id="Index">
		<h3>Главная</h3>
		<IndexFilter></IndexFilter>
		<hr>
		<div class="statistic" v-if="statistic !== null">
			<p>Прием в сеть: {{ statistic.input }}</p>
			<p>Полезный отпуск: {{ statistic.output }}</p>
			<p>Потери: {{ statistic.losses }}</p>
		</div>
		<div v-else>
			<p>Нет данных для загрузки...</p>
		</div>
	</div>
</template>

<script>
	import IndexFilter from '@/components/IndexFilter';

	export default {
		name: 'Index',
		data() {
			return {
				statistic: null
			}
		},
		mounted() {

		},
		components: {
			IndexFilter
		}
	}
</script>