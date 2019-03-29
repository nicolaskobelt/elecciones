import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        partidos: [
            {
                id: 'partido1',
                Color: 'blue darken-4',
            },
            {
                id: 'partido2',
                Color: 'red darken-4'
            },
            {
                id: 'partido3',
                Color: 'yellow darken-3'
            },
            {
                id: 'partido4',
                Color: 'teal darken-3'
            },
            {
                id: 'partido5',
                Color: 'deep-orange darken-2'
            },
            {
                id: 'partido6',
                Color: 'light-blue darken-2'
            },

        ],
        mesas: []
    },
    mutations: {
        partidosCargados(state, payload){
            state.partidos = payload
        },
        mesasCargadas(state, payload){
            state.mesas = payload
        }
    },
    actions: {
        cargarPartidos({commit}) {
            firebase.database().ref('Partidos').once('value')
                .then((data) => {
                    const Partidos = []
                    const obj = data.val()
                    for (let key in obj) {
                        Partidos.push({
                            id: key,
                            Nombre: obj[key].nombre,
                            Candidato: obj[key].candidato,
                            Porcentaje: obj[key].porcentaje,
                            Color: obj[key].color
                        })
                    }
                    commit('partidosCargados', Partidos)
                })

        },
        cargarMesas({commit}) {
            firebase.database().ref('Mesas').once('value')
                .then((data) => {
                    const Mesas = []
                    const obj = data.val()
                    for (let key in obj) {
                        Mesas.push({
                            id: obj[key].id,
                            partido1: obj[key].upc,
                            partido2: obj[key].izquierda,
                            partido3: obj[key].cambiemos,
                            partido4: obj[key].accion,
                            partido5: obj[key].unite,
                            partido6: obj[key].unidad,
                        })
                    }
                    commit('mesasCargadas', Mesas)
                })
        },
    },
    getters: {
        percPartidos(state) {
            return state.partidos;
            },
        resMesa(state) {
            return state.mesas;
            },
        },
})