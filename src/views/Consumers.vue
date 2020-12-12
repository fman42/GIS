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
                <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                </tr>
            </tbody>
        </table>
        <!-- Pagination -->
        <Pagination :items="[10,10,10,10,10,10]"></Pagination>
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
                consumers: []
            }
        },
        mounted() {

        },
        methods: {
            filter(filters) {
                console.log(filters);
            }
        },
        components: {
            ConsumerFilter,
            Pagination
        }
    }
</script>