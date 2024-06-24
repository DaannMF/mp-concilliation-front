<template>
   <li @click="toggleSideBar()" class="nav-item d-xl-none ps-3 d-flex align-items-center">
      <a class="nav-link text-body p-0" id="iconNavbarSidenav">
         <div class="sidenav-toggler-inner">
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
            <i class="sidenav-toggler-line"></i>
         </div>
      </a>
   </li>
</template>

<script setup lang="ts">
const toggleSideBar = () => {
   let body = document.getElementsByTagName('body')[0];
   let className = 'g-sidenav-pinned';
   const sidenav = document.getElementById('sidenav-main');
   const iconSidenav = document.getElementById('iconSidenav');

   if (body.classList.contains(className)) {
      body.classList.remove(className);
      setTimeout(function () {
         sidenav?.classList.remove('bg-white');
      }, 100);
      sidenav?.classList.remove('bg-transparent');

   } else {
      body.classList.add(className);
      sidenav?.classList.add('bg-white');
      sidenav?.classList.remove('bg-transparent');
      iconSidenav?.classList.remove('d-none');
   }
}
</script>