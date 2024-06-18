<template>
   <div>
      <RouterView />
   </div>

   <notifications position="bottom right" />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

* {
   font-family: Helvetica, Arial, sans-serif;
}
</style>
