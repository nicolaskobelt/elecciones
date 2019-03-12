<template>
  <v-app>
      <v-navigation-drawer
              v-model="SideNav"
              fixed
              app>
        <v-list>
            <v-list-tile
                    v-for="item in menuItem"
                    :key="item.title"
                    router
                    :to="item.link">
                <v-list-tile-action>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-action>
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
      <v-toolbar dark class="deep-purple darken-4">
    <v-toolbar-side-icon @click="SideNav = !SideNav">
        <v-icon>menu</v-icon>
        </v-toolbar-side-icon>
            <v-toolbar-title>Elecciones 2019</v-toolbar-title>
      </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>

</template>

<script>
export default {
  data () {
    return {
        SideNav: false,
        menuItem: [
            {icon: 'bar_chart', title:'Resultados generales', link: '/generales'},
            {icon: 'show_chart', title:'Resultados por mesa', link: '/pormesa'},
            {icon: 'mail', title: 'Contacto', link: '/contacto'},
            {icon: 'help', title: 'Help', link: '/help'}

        ]
    }
  },
  name: 'App'
}
</script>
