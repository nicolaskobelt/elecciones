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
                v-for="mesa in mesas"
                :key="mesa.id">
                    <v-card color="grey lighten-2">
                        <v-layout row wrap class="mb-1">
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">Mesa: {{mesa.id}}</div>
                                        <div>UPC: {{mesa.partido1}}</div>
                                        <div>Frente de Izquierda: {{mesa.partido2}}</div>
                                        <div>Cambiemos: {{mesa.partido3}}</div>
                                        <div>Accion Vecinal: {{mesa.partido4}}</div>
                                        <div>Unite por la Libertad: {{mesa.partido5}}</div>
                                        <div>Unidad Ciudadana: {{mesa.partido6}}</div>
                                    </div>
                                </v-card-title>
                            </v-flex>
                            <v-flex xs5>

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
        computed: {
            mesas(){
                return this.$store.getters.resMesa;
            }
        }

    }
</script>