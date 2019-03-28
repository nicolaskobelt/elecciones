import Vue from 'vue'
import Router from 'vue-router'
import Generales from '@/components/Generales'
import PorMesa from '@/components/PorMesa'
import Contacto from '@/components/Contacto'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Generales',
            component: Generales
        },
        {
            path: '/pormesa',
            name: 'PorMesa',
            component: PorMesa
        },
        {
            path: '/contacto',
            name: 'Contacto',
            component: Contacto
        },
    ],
    mode: 'history'
})