<template>
    <div class="container">
        <ul class="pagination center-align">
            <li :class="getChevronClass('left')">
                <a @click="activePage--">
                    <i class="material-icons">chevron_left</i>
                </a>
            </li>
            <!-- Pages -->
            <li v-for="i in maxPage" :class="getPaginationClass(i)" v-bind:key="i">
                <a @click="activePage = i">{{ i }}</a>
            </li>
            <!-- /Pages -->
            <li :class="getChevronClass('right')">
                <a @click="activePage++">
                    <i class="material-icons">chevron_right</i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            items: {
                type: Array,
                required: true,
                default: () => []
            },
            maxItems: {
                type: Number,
                required: false,
                default: () => 5
            }
        },
        data() {
            return {
                collection: [],
                maxPage: NaN,
                activePage: 1
            }
        },
        mounted() {
            this.collection = this.items;
            this.maxPage = Math.ceil(this.collection.length / this.maxItems);
        },
        methods: {
            getPaginationClass(eachIndex) {
                return eachIndex === this.activePage ? "active" : "waves-effect waves-light";
            },

            getChevronClass(side) {
                const DEFAULT_CLASS = "waves-effect";

                switch (side) {
                    case 'left':
                    {
                        return this.activePage === 1 ? "disabled" : DEFAULT_CLASS;
                    }
                    case 'right':
                    {
                        return this.activePage === this.maxPage ? "disabled" : DEFAULT_CLASS;
                    }
                    default: {
                        console.error('Undefined the side: ' + side);
                    }
                }
            },

            updatePagination() {
                this.$emit('updateActivePage', this.activePage);
            }
        },
        watch: {
            activePage: function () {
                this.updatePagination();
            }
        }
    }
</script>