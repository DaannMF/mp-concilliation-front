<template>
   <SideNav class="fixed-start" />
   <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <NavBar class="position-sticky blur mt-4 left-auto top-1 z-index-sticky px-0 mx-4 mt-4 bg-none" />
      <hr class="mt-3 horizontal dark" />
      <router-view />
   </main>
</template>

<script setup lang="ts">
import SideNav from '../modules/sidenav/SideNav.vue'
import NavBar from '../modules/NavBar.vue'

</script>