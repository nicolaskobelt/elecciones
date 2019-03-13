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
           <v-flex xs12>
               <v-card color="white" hover>
                   <v-layout row wrap class="mb-1">
                    <v-card-title primary-title>
                       <div>
                           <div class="headline">Mesas escrutadas</div>
                               <v-progress-linear
                                       v-model="valueDeterminate"
                                       color="deep-purple darken-4"
                               ></v-progress-linear>
                       </div>
                   </v-card-title>
                   </v-layout>
               </v-card>
           </v-flex>

            <v-flex xs12>
                <v-card color="red darken-4" class="white--text">
                    <v-layout row wrap class="mb-1">
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Frente de Izquierda</div>
                                    <div>Martin Gamron</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="15"
                                    :value="10"
                                    color="white"
                            >
                                10
                            </v-progress-circular>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

           <v-flex xs12>
               <v-card color="light-blue darken-4" class="white--text">
                   <v-layout row wrap class="mb-1">
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">UPC</div>
                                   <div>Claudio Chavero</div>
                               </div>
                           </v-card-title>
                       </v-flex>
                       <v-flex xs5>
                           <v-progress-circular
                                   :rotate="-90"
                                   :size="100"
                                   :width="15"
                                   :value="10"
                                   color="white"
                           >
                               10
                           </v-progress-circular>
                       </v-flex>
                   </v-layout>
               </v-card>
           </v-flex>

           <v-flex xs12>
               <v-card color="yellow darken-3" class="white--text">
                   <v-layout row wrap class="mb-1">
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">Cambiemos</div>
                                   <div>Ramón Ramírez</div>
                               </div>
                           </v-card-title>
                       </v-flex>
                       <v-flex xs5>
                           <v-progress-circular
                                   :rotate="-90"
                                   :size="100"
                                   :width="15"
                                   :value="10"
                                   color="white"
                           >
                               10
                           </v-progress-circular>
                       </v-flex>
                       </v-layout>
               </v-card>
           </v-flex>


           <v-flex xs12>
               <v-card color="green darken-3" class="white--text">
                   <v-layout row wrap class="mb-1">
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">Movimiento de Acción Vecinal</div>
                                   <div>Gerardo Rodríguez</div>
                               </div>
                           </v-card-title>
                       </v-flex>
                       <v-flex xs5>
                           <v-progress-circular
                                   :rotate="-90"
                                   :size="100"
                                   :width="15"
                                   :value="10"
                                   color="white"
                           >
                               10
                           </v-progress-circular>
                       </v-flex>
                   </v-layout>
               </v-card>
           </v-flex>

               <v-flex xs12>
                   <v-card color="cyan accent-4" class="white--text">
                       <v-layout row wrap class="mb-1">
                           <v-flex xs7>
                               <v-card-title primary-title>
                                   <div>
                                       <div class="headline">Unidad Ciudadana</div>
                                       <div>Mirta Albarracín</div>
                                   </div>
                               </v-card-title>
                           </v-flex>
                           <v-flex xs5>
                               <v-progress-circular
                                       :rotate="-90"
                                       :size="100"
                                       :width="15"
                                       :value="10"
                                       color="white"
                               >
                                   10
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
        data () {
            return {
                valueDeterminate: 50
            }
        }
    }
</script>
