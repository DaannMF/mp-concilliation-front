<template>
   <div class="modal fade" id="confirm_payment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="exampleModalLabel">Conciliación</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               Está apunto de conciliar el pago, ¿Desea continuar?
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
               <button type="button" @click="$emit('confirm')" class="btn btn-primary" data-bs-dismiss="modal">
                  Confirmar
               </button>
            </div>
         </div>
      </div>
   </div>
</template>