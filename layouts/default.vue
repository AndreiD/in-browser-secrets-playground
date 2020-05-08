<template>
  <v-app style="background: #12171a;">
    <v-app-bar flat fixed clipped-left app color="#263238" dark>
      <v-toolbar-title style="width: 550px" class="ml-0 pl-4">
        <nuxt-link style="text-decoration:none" to="/">
          <span class="display-1" style="color:#FFF; font-weight: bold">ETH</span>
          <span class="display-1" style="color:#ff5722">Playground</span>
        </nuxt-link>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>
    <v-content v-cloak>
      <Nuxt />
    </v-content>
    <v-footer color="#263238" dark app>
      <a
        disabled
        style="text-decoration: none;  color: #b0bec5"
        text
        href="https://github.com/AndreiD?"
      >andrei &copy; 2020</a>
      &nbsp;
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isTesting: false,

      title: "Encryption Playground"
    };
  },
  methods: {
    goToUrl(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
<style scoped>
#styled-input {
  height: 48px;
  width: 48px;
}
.styled-input label[for] {
  height: 48px;
}
.v-navigation-drawer > .list:not(.list--dense) .list__tile {
  font-size: 17px;
}
.avatar {
  max-width: 75px;
}
/* .list__tile--active.list__tile.list__tile--link {
} */
a.nuxt-link-exact-active.list__tile--active.list__tile.list__tile--link {
  font-weight: 900 !important;
  color: #3f51b5 !important;
}
.v-list-item {
  border-left: 10px solid transparent;
}
.v-list-item--active {
  color: black;
  border-left: 10px solid red;
}
</style>
