<template>
    <div id="consumers">
        <h3>Потребители</h3>
        <button class="waves-effect waves-light btn showGoogleMap" @click="$router.push('/consumers/map')">Отобразить в Google Maps</button>
        <!-- Filter -->
        <ConsumerFilter v-on:consumerFilter="filter"></ConsumerFilter>
        <!-- /Filter -->
        <table class="striped">
            <thead>
                <tr>
                    <th>Номер</th>
                    <th>Имя потребителя</th>
                    <th>Показатель счетчика</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filterConsumers.slice((this.page - 1) * 5, this.page * 5)" v-bind:key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>
        <!-- Pagination -->
        <Pagination :items="[10,10,10,10,10,10]" v-on:updateActivePage="updatePage"></Pagination>
        <!-- /Pagination -->
    </div>
</template>

<style>
    .showGoogleMap {
        margin-bottom: 10px;
    }
</style>

<script>
    import ConsumerFilter from '@/components/ConsumerFilter.vue';
    import Pagination from '@/components/Pagination.vue';

    export default {
        name: 'Consumers',
        data() {
            return {
                page: 1,
                filters: {},
                consumers: [
                    {
                        id: 1,
                        name: 'ГБПОУ СРМК',
                        price: '00002500',
                        lat: 45.0600103,
                        lng: 41.9263255
                    },
                    {
                        id: 2,
                        name: 'ЦУМ',
                        price: '00001500',
                        lat: 45.0299894,
                        lng: 41.9178695
                    },
                    {
                        id: 3,
                        name: 'ТЦ Ниагра',
                        price: '00004000',
                        lat: 45.0299894,
                        lng: 41.9178695
                    },
                    {
                        id: 4,
                        name: 'Новый Рим',
                        price: '00007000',
                        lat: 45.0160647,
                        lng: 41.9086282
                    },
                    {
                        id: 5,
                        name: 'ТЦ Маршал',
                        price: '00002500',
                        lat: 45.0132966,
                        lng: 41.9065199
                    },
                    {
                        id: 6,
                        name: 'ТЦ Москва',
                        price: '00002655',
                        lat: 45.0093854,
                        lng: 41.9149356
                    },
                    {
                        id: 7,
                        name: 'Гимназия номер 24',
                        price: '00000351',
                        lat: 45.0011931,
                        lng: 41.9104382
                    },
                    {
                        id: 8,
                        name: '35 лицей',
                        price: '00005320',
                        lat: 45.0011931,
                        lng: 41.9104382
                    },
                    {
                        id: 9,
                        name: 'Перекресток на 45 параллели',
                        price: '00006120',
                        lat: 45.0011931,
                        lng: 41.9104382
                    },
                    {
                        id: 10,
                        name: '45 параллель',
                        price: '00003210',
                        lat: 44.9999964,
                        lng: 41.9194726
                    }
                ]
            }
        },
        methods: {
            filter(filters) {
                this.filters = filters;
            },

            updatePage(page) {
                this.page = page;
            }
        },
        computed: {
            filterConsumers: function () {
                let consumers = this.consumers;

                if (this.filters.id != null && this.filters.id.length != 0)
                    consumers = consumers.filter(x => x.id == this.filters.id);

                if (this.filters.value != null && this.filters.value.length != 0)
                    consumers = consumers.filter(x => x.value == this.filters.value);

                return consumers;
            }
        },
        components: {
            ConsumerFilter,
            Pagination
        }
    }
</script>