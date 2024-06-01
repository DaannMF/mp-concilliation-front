<template>
   <div id="sidenav-collapse-main" class="w-auto collapse navbar-collapse">
      <ul class="navbar-nav">
         <li v-for="menu in menuList" :key="menu.name" class="nav-item">
            <SidenavCollapse :nav-text="menu.name" :to="{ name: menu.name }">
               <template #icon>
                  <i :class="menu.icon"></i>
               </template>
            </SidenavCollapse>
         </li>
      </ul>
   </div>
</template>

<script setup lang="ts">
import SidenavCollapse from "./SidenavCollapse.vue";
import { menuList } from "../../router/menu_list"

</script>