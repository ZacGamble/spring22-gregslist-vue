<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row p-2">
      <div class="col-2"></div>
      <!-- NOTE user.isAuthenticated is making sure the user is logged in - hiding the button if they are not logged in -->
    </div>
    <router-view />
  </main>

  <NavOffCanvas id="nav" />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      user: computed(() => AppState.user),
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
