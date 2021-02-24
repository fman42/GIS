<template>
    <div ref='googleMap' class='google-map'></div>
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
        name: 'GoogleMap',
        props: {
            collection: {
                type: Array,
                defualt: () => [],
                required: false
            },
            mapOptionsProp: {
                required: false,
                default: () => null
            }
        },
        data() {
            return {
                mapOptions: {},
                map: undefined
            }
        },
        mounted() {
            this.mapOptions = {
                center: { lat: 55, lng: 36 },
                zoomControl: true,
                zoom: 6,
                gestureHandling: 'cooperative'
            };
            
            if (this.mapOptionsProp != null)
                this.mapOptions = this.mapOptionsProp;

            this.initMap();
            this.pushMarkers();
        },
        methods: {
            initMap() {
                // eslint-disable-next-line no-undef
                this.map = new google.maps.Map(this.$refs.googleMap, {
                    ...this.mapOptions
                });
            },

            pushMarkers() {
                console.log(this.collection);
                this.collection.map((item) => {
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
        },
        watch: {
            collection: function () {
                this.pushMarkers();
            }
        }
    }
</script>