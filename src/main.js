import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index.js'
import {store} from './store'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB2FDwUOjIV744CkytnCFBO3zlhuyXo_c4',
            authDomain: 'eleccionesfm.firebaseapp.com',
            databaseURL: 'https://eleccionesfm.firebaseio.com',
            projectId: 'eleccionesfm',
            storageBucket: 'eleccionesfm.appspot.com',
            messagingSenderId: '698887612012'
        })
        this.$store.dispatch('cargarPartidos')
        this.$store.dispatch('cargarMesas')

    },
}).$mount('#app')
