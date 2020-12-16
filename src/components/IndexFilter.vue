<template>
    <div id="IndexFilter">
        <p>Выберите рассчетный период</p>
        <div class="row">
            <a class="waves-effect waves-light btn" @click="toggleVisible()">Фильтр</a>
            <div class="filter" v-show="visible">
                <div class="row">
                    <div class="input-field col s4">
                        <label>Дата(с)</label>
                        <input type="datetime-local" v-model="filter.from" class="datepicker">
                    </div>
                    <div class="input-field col s4">
                        <label>Дата(до)</label>
                        <input type="datetime-local" v-model="filter.to" class="datepicker">
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
        name: 'IndexFilter',
        data() {
            return {
                visible: false,
                filter: {
                    from: null,
                    to: null
                }
            }
        },
        methods: {
            toggleVisible() {
                this.visible = !this.visible;
            },
            apply() {
                this.$emit('indexFilter', this.filter);
            }
        }
    }
</script>