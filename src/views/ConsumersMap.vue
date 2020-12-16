<template>
    <div>
        <button class="waves-effect waves-light btn showGoogleMap" @click="$router.push('/consumers')">Потребители</button>
        <GoogleMap :collection="collection"></GoogleMap>
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
                collection: [],
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