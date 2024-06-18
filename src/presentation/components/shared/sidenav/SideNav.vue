<template>
   <aside id="sidenav-main"
      class="mt-3 mb-0 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl bg-white z-3">

      <div class="sidenav-header p-4">
         <img src="/img/mercado_pago.svg" alt="Mercado Pago - Conciliador de Pagos">
      </div>


      <hr class="mt-2 horizontal dark" />

      <SidenavList />

   </aside>
</template>

<script setup lang="ts">
import SidenavList from "./SidenavList.vue";
</script>
