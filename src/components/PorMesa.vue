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
                                        <div>Partido1: {{mesa.partido1}}</div>
                                        <div>Partido2: {{mesa.partido2}}</div>
                                        <div>Partido3: {{mesa.partido3}}</div>
                                        <div>Partido4: {{mesa.partido4}}</div>
                                        <div>Partido5: {{mesa.partido5}}</div>
                                        <div>Partido6: {{mesa.partido6}}</div>
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