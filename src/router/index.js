import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import Author from '../views/Author.vue'
import Consumers from '../views/Consumers.vue'
import ConsumersMap from '../views/ConsumersMap.vue'
import Schema from '../views/Schema.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/author',
        name: 'Author',
        component: Author
    },
    {
        path: '/consumers',
        name: 'Consumers',
        component: Consumers
    },
    {
        path: '/consumers/map',
        name: 'ConsumersMap',
        component: ConsumersMap
    },
    {
        path: '/schema',
        name: 'Schema',
        component: Schema
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
