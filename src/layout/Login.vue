<script setup lang="ts">
let user: string | null
let password: string | null
let loading: boolean = false
let version: string = import.meta.env.VITE_APP_VERSION

function login() {
   console.log('Login');
}
</script>

<template>
   <div>
      <main class="mt-0 main-content main-content-bg">
         <section>
            <div class="page-header min-vh-100 d-flex align-items-center">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col-xl-5 col-lg-5 col-md-8">
                        <div class="card">
                           <div class="card-header text-center pb-0">
                              <h3 class="font-weight-bold text-primary">Conciliaci&oacute;n</h3>
                           </div>
                           <div class="card-body">
                              <form @submit.prevent="login">
                                 <div class="mb-3">
                                    <label for="usuario" class="form-label">Usuario</label>
                                    <div class="input-group">
                                       <span class="input-group-text"><i class="fa fa-user"></i></span>
                                       <input v-model="user" type="text" class="form-control" required>
                                    </div>
                                 </div>
                                 <div class="mb-3">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <div class="input-group">
                                       <span class="input-group-text"><i class="fas fa-key"></i></span>
                                       <input v-model="password" type="password" class="form-control" required>
                                    </div>
                                 </div>
                                 <div class="text-center">
                                    <button type="submit" class="btn btn-primary w-100" :disabled="loading">
                                       <span v-if="loading"><i class="fas fa-spinner fa-spin"></i> </span>
                                       <span v-else>Ingresar</span>
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
      <footer class="py-5 login-footer text-center">
         <div class="container">
            <p class="mb-0 text-secondary">{{ "Mercado Pago Conciliator - Version " + version }}</p>
         </div>
      </footer>
   </div>
</template>

<style scoped>
.login-footer {
   position: fixed;
   bottom: 1px;
   width: 100%;
}
</style>
