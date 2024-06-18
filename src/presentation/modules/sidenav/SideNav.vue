<template>
   <aside id="sidenav-main"
      class="mt-3 mb-0 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl bg-white"
      style="z-index:30">

      <div class="sidenav-header">
         <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true" id="iconSidenav"></i>

         <span class="ms-1 font-weight-bold">Consolidador de Pagos</span>
      </div>


      <hr class="mt-2 horizontal dark" />
      <SidenavList />
   </aside>
</template>

<script setup lang="ts">
import SidenavList from "./SidenavList.vue";
</script>
