<template>
   <aside id="sidenav-main"
      class="mt-3 ms-3 mb-0 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl "
      style="z-index:30">

      <div class="sidenav-header">
         <i id="iconSidenav"
            class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
            aria-hidden="true"></i>
      </div>
      <hr class="mt-2 horizontal dark" />
      <SidenavList />
   </aside>
</template>

<script setup lang="ts">
import SidenavList from "./SidenavList.vue";
</script>
