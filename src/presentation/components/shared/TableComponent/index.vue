<template>
   <EasyDataTable 
   :headers="props.headers" 
   :items="props.items" 
   :search-field="props.search_fields"
   :search-value="props.search_value" 
   
   :loading="props.loading" 
   
   :theme-color="colorTheme" 
   
   :rows-per-page="rowsPerPage"
   
   empty-message="Sin resultados" 
   rows-per-page-message="Filas por página" 
   
   border-cell 
   buttons-pagination
   hide-rows-per-page

   show-index

   body-text-direction="center"
   >
      <!-- Do not remove (slots inheritance) -->
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
         <slot :name="name" v-bind="slotData" />
      </template>

   </EasyDataTable>
</template>

<script setup lang="ts">
import type { Header, Item } from "vue3-easy-data-table";
const colorTheme = `#0d6efd`;
const rowsPerPage = 12;

const props = defineProps<{
   headers: Header[]
   items: Item[]
   search_fields?: string[]
   search_value?: string
   loading: boolean
}>();
</script>
