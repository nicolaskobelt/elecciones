import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Generales from '@/components/Generales'
import PorMesa from '@/components/PorMesa'
import Contacto from '@/components/Contacto'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/generales',
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
        {
            path: '/help',
            name: 'Help',
            component: Help
        },

    ],
    mode: 'history'
})