<template>

    <v-card
    flat
    >
       <v-container
               fluid
               grid-list-lg
               hover
           >
           <v-layout row wrap>
            <v-flex xs12
            v-for="perPartido in perPartidos"
            :key="perPartido.id">
                <v-card :color="perPartido.Color" class="white--text">
                    <v-layout row wrap class="mb-1">
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{perPartido.Nombre}}</div>
                                    <div>{{perPartido.Candidato}}</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="15"
                                    :value="perPartido.Porcentaje"
                                    color="white"
                            >
                                {{perPartido.Porcentaje}}
                            </v-progress-circular>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

           </v-layout>
       </v-container>
    </v-card>
</template>
<script>
    export default {
        computed:{
            perPartidos(){
                return this.$store.getters.percPartidos
            }
        },
        data () {
            return {
                valueDeterminate: 50
            }
        }
    }
</script>
