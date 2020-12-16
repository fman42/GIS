<template>
    <div>
        <h3>Схема электрической сети</h3>
        <GoogleMap :collection="collection"></GoogleMap>
    </div>
</template>

<script>
    import GoogleMap from '@/components/GoogleMap';

    export default {
        name: 'Schema',
        data() {
            return {
                collection: []
            }
        },
        mounted() {
            
        },
        components: {
            GoogleMap
        }
    }
</script>