<template>
    <v-card>
       <v-container
               fluid
               grid-list-lg
               hover
           >
            <v-flex xs12>
                <v-card color="light-blue darken-3" class="white--text" hover>
                    <v-layout row wrap>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">Partido 1</div>
                                    <div>Candidato</div>
                                    <div>dato extra</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs5>
                            <v-progress-circular
                                    :rotate="-90"
                                    :size="100"
                                    :width="15"
                                    :value="50"
                                    color="white"
                            >
                                50
                            </v-progress-circular>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

           <v-flex xs12>
               <v-card color="red darken-4" class="white--text">
                   <v-layout row wrap>
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">Partido 2</div>
                                   <div>Candidato</div>
                                   <div>dato extra</div>
                               </div>
                           </v-card-title>
                       </v-flex>
                       <v-flex xs5>
                           <v-progress-circular
                                   :rotate="-90"
                                   :size="100"
                                   :width="15"
                                   :value="20"
                                   color="white"
                           >
                               20
                           </v-progress-circular>
                       </v-flex>
                   </v-layout>
               </v-card>
           </v-flex>

           <v-flex xs12>
               <v-card color="teal darken-3" class="white--text">
                   <v-layout row>
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">Partido 3</div>
                                   <div>Candidato</div>
                                   <div>dato extra</div>
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
               <v-card color="blue-grey darken-2" class="white--text">
                   <v-layout row>
                       <v-flex xs7>
                           <v-card-title primary-title>
                               <div>
                                   <div class="headline">Partido 4</div>
                                   <div>Candidato</div>
                                   <div>dato extra</div>
                               </div>
                           </v-card-title>
                       </v-flex>
                       <v-flex xs5>
                           <v-progress-circular
                                   :rotate="-90"
                                   :size="100"
                                   :width="15"
                                   :value="33"
                                   color="white"
                           >
                               33
                           </v-progress-circular>
                       </v-flex>
                   </v-layout>
               </v-card>
           </v-flex>

       </v-container>
    </v-card>
</template>
