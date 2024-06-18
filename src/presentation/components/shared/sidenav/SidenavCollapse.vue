<template>
   <router-link class="nav-link" :to="props.to">
      <div
         class="me-2 text-white icon-font-1 text-center shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center">
         <slot name="icon"></slot>
      </div>
      <span class="nav-link-text ms-1">{{ props.navText }}</span>
   </router-link>
</template>

<script setup lang="ts">
const props = defineProps({
   to: { type: [Object, String], required: true },
   navText: { type: String, required: true },
})
</script>

<style>
.icon-font-1 i {
   font-size: 0.95rem !important;
   color: #111111 !important;
}
</style>