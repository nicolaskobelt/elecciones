import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        partidos: [],
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
                            partido1: obj[key].partido1,
                            partido2: obj[key].partido2,
                            partido3: obj[key].partido3,
                            partido4: obj[key].partido4,
                            partido5: obj[key].partido5,
                            partido6: obj[key].partido6,
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