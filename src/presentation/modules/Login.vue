<template>
   <div>
      <main class="mt-0 main-content main-content-bg">
         <section>
            <div class="page-header min-vh-100 d-flex align-items-center">
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col-xl-5 col-lg-5 col-md-8">
                        <div class="card">
                           <div class="card-body">
                              <form :validation-schema="schema"
                                 @submit.prevent="authPloc.login({ username: state.username, password: state.password });">

                                 <div v-if="state.error" class="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50">
                                    {{ state.error }}
                                 </div>

                                 <div class="mb-3">
                                    <label for="usuario" class="form-label">Usuario</label>
                                    <div class="input-group">
                                       <span class="input-group-text"><i class="fa fa-user"></i></span>
                                       <input v-model="state.username" type="text" class="form-control" id="usuario"
                                          required>
                                    </div>
                                 </div>
                                 <div class="mb-3">
                                    <label for="password" class="form-label">Contraseña</label>
                                    <div class="input-group">
                                       <span class="input-group-text"><i class="fas fa-key"></i></span>
                                       <input v-model="state.password" type="password" class="form-control"
                                          id="password" required>
                                    </div>
                                 </div>
                                 <div class="text-center">
                                    <button type="submit" class="btn btn-primary w-100"
                                       :disabled="state.loadingRequest">
                                       <span v-if="state.loadingRequest"><i class="fas fa-spinner fa-spin"></i> </span>
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

<script setup lang="ts">
import { watch } from 'vue';
import useAUthState from '../bloc/AuthState';
import { DependencyLocator } from '../../core/dependencies/DependencyLocator';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';

const state = useAUthState();
const authPloc = DependencyLocator.provideAuthPloc(state);
const router = useRouter();
const version = import.meta.env.VITE_APP_VERSION;

const schema = object().shape({
   username: string().required(),
   password: string().required(),
});

watch(() => state.isAuthenticated, (val) => {
   if (val) {
      router.push('/dashboard ');
   }
});
</script>


<style scoped>
.login-footer {
   position: fixed;
   bottom: 1px;
   width: 100%;
}
</style>
