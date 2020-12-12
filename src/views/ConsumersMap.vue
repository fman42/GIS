<template>
    <div>
        <button class="waves-effect waves-light btn showGoogleMap" @click="$router.push('/consumers')">Потребители</button>
        <div ref='googleMap' class='google-map'></div>
    </div>
</template>

<style scoped>
    .google-map {
        width: 100%;
        height: 450px;
        margin-bottom: 20px;
    }
    .showGoogleMap {
        margin-bottom: 30px;
    }
</style>

<script>
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
                collection: [],
                mapOptions: {
                    center: { lat: 55, lng: 36 },
                    zoomControl: true,
                    zoom: 6,
                    gestureHandling: 'cooperative'
                },
                map: undefined
            }
        },
        mounted() {
            this.collection = this.items;

            this.initMap();
            this.pushMarkers(this.collection);
        },
        methods: {
            initMap() {
                // eslint-disable-next-line no-undef
                this.map = new google.maps.Map(this.$refs.googleMap, {
                    ...this.mapOptions
                });
            },

            pushMarkers(collection) {
                collection.map((item) => {
                    // eslint-disable-next-line no-undef
                    const locations = new google.maps.LatLng(item.lat, item.lng);

                    // eslint-disable-next-line no-undef          
                    new google.maps.Marker({
                        position: locations,
                        map: this.map
                    });       

                    /*
                        label, title
                    */
                });
            }
        }
    }
</script>