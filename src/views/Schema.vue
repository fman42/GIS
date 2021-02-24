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
                collection: [{
                        lat: 45.0408024,
                        lng: 41.910965
                    },
                    {
                        lat: 45.0579184,
                        lng: 38.857588,
                    },
                    {
                        lat: 55.5815243,
                        lng: 36.8250941
                    },
                    {
                        lat: 59.9399138,
                        lng: 29.5342577
                    },
                    {
                        lat: 56.8119441,
                        lng: 60.3371974
                    }
                ]
            }
        },
        components: {
            GoogleMap
        }
    }
</script>