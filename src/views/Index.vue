<template>
	<div id="Index">
		<h3>Главная</h3>
		<IndexFilter v-on:indexFilter="applyFilter"></IndexFilter>
		<hr>
		<div class="statistic" v-if="statistic.length != 0">
			<b>{{ getStatistic.dateFrom }} - {{ getStatistic.dateTo }}</b>
			<p>Прием в сеть: {{ getStatistic.input }} В</p>
			<p>Полезный отпуск: {{ getStatistic.output }} В</p>
			<p>Потери: {{ getStatistic.losses }} В</p>
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
				statistic: [
					{
						dateFrom: '2020-12-01',
						dateTo: '2020-12-10',
						input: 0.32,
						output: 0.50,
						losses: 0.40
					},
					{
						dateFrom: '2020-12-10',
						dateTo: '2020-12-20',
						input: 0.42,
						output: 0.20,
						losses: 0.01
					},
					{
						dateFrom: '2020-12-20',
						dateTo: '2020-12-30',
						input: 0.32,
						output: 0.50,
						losses: 0.40
					},
					{
						dateFrom: '2021-01-01',
						dateTo: '2020-01-10',
						input: 0.42,
						output: 0.20,
						losses: 0.01
					},
					{
						dateFrom: '2021-01-10',
						dateTo: '2020-01-20',
						input: 0.52,
						output: 0.34,
						losses: 0.21
					},
					{
						dateFrom: '2021-01-30',
						dateTo: '2020-02-01',
						input: 0.70,
						output: 0.42,
						losses: 0.25
					},
					{
						dateFrom: '2020-02-01',
						dateTo: '2020-02-10',
						input: 0.32,
						output: 0.31,
						losses: 0.20
					},
					{
						dateFrom: '2020-02-10',
						dateTo: '2020-02-20',
						input: 0.22,
						output: 0.25,
						losses: 0.15
					}
				],
				filter: {
					from: null,
					to: null
				}
			}
		},
		methods: {
			applyFilter: (value) => {
				this.filter = value;
				console.log(this.filter);
			}
		},
		computed: {
			getStatistic: function () {
				return this.statistic[this.statistic.length - 1];
			}
		},
		components: {
			IndexFilter
		}
	}
</script>