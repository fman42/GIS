<template>
    <div id="ConsumerFilter">
        <div class="row">
            <a class="waves-effect waves-light btn" @click="toggleVisible()">Фильтр</a>
            <div class="filter" v-show="visible">
                <div class="row">
                    <div class="input-field col s4">
                        <input id="consumer_id" v-model="filter.id" type="text" class="validate">
                        <label for="consumer_id">Номер</label>
                    </div>
                    <div class="input-field col s4">
                        <input id="electric_value" v-model="filter.value" type="text" class="validate">
                        <label for="electric_value">Показания счетчика</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s4">
                        <label>Дата</label>
                        <input type="text" class="datepicker">
                    </div>
                    <div class="input-field col s4">
                        <label>Дата</label>
                        <input type="text" class="datepicker">
                    </div>
                </div>
                <div class="row">
                    <a class="waves-effect waves-light btn" @click="apply()">Применить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConsumerFilter',
        data() {
            return {
                visible: false,
                filter: {
                    id: null,
                    value: null,
                    dateFrom: null,
                    dateTo: null
                }
            }
        },
        methods: {
            toggleVisible() {
                this.visible = !this.visible;
            },

            apply() {
                this.$emit('consumerFilter', this.filter);
            }
        }
    }
</script>