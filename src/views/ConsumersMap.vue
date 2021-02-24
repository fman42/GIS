<template>
    <div>
        <button class="waves-effect waves-light btn showGoogleMap" @click="$router.push('/consumers')">Потребители</button>
        <GoogleMap :collection="consumers" :mapOptionsProp="options"></GoogleMap>
    </div>
</template>

<script>
    import GoogleMap from '@/components/GoogleMap';

    export default {
        name: 'ConsumersMap',
        props: {
            items: {
                type: Array,
                required: false,
                default: () => []
            }
        },
        data() {
            return {
                options: {
                    center: { lat: 45.0408024, lng: 41.910965 },
                    zoomControl: true,
                    zoom: 12.5,
                    gestureHandling: 'cooperative'
                },
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
        mounted() {
            this.collection = this.items;
        },
        components: {
            GoogleMap
        }
    }
</script>