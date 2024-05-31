import type { LoginUseCase } from "../../domain/use-cases/auth/LoginUseCase";
import type { AuthenticationStore } from "./AuthState";
import type { ResetPasswordRequest, LoginRequest } from "../../domain/entities/auth";
import { Ploc } from "../../core/Ploc";
import type { Router } from "vue-router";
import type { ResetPasswordUseCase } from "../../domain/use-cases/auth/ResetPassWordUseCase";

export class AuthBloc extends Ploc<AuthenticationStore> {
   private loginUseCase: LoginUseCase;
   private resetPasswordUseCase: ResetPasswordUseCase;

   constructor({
      store,
      router,
      loginUseCase,
      resetPasswordUseCase,
   }: {
      store: AuthenticationStore,
      router: Router,
      loginUseCase: LoginUseCase,
      resetPasswordUseCase: ResetPasswordUseCase;
   }) {
      super({ store, router });
      this.loginUseCase = loginUseCase;
      this.resetPasswordUseCase = resetPasswordUseCase;
   }

   login = async (payload: LoginRequest): Promise<void> => {
      this.store.error = "";
      this.store.loadingRequest = true;
      this.store.token = null;
      const failureOrSuccess = await this.loginUseCase.execute(payload);
      this.store.loadingRequest = false;
      failureOrSuccess.fold(
         error => {
            this.store.error = this.handleErrors(error);
         },
         (token) => {
            localStorage.setItem('token', token);
            this.store.initAuth();
         }
      )
   }

   logout = () => {
      localStorage.clear();
      this.store.token = "";
      this.store.$reset();
   }

   async resetPassword(payload: ResetPasswordRequest) {
      this.store.error = "";
      this.store.loadingRequest = true;
      this.store.successStatus = false;
      const failureOrSuccess = await this.resetPasswordUseCase.execute(payload);
      this.store.loadingRequest = false;
      failureOrSuccess.fold(
         error => {
            this.store.error = this.handleErrors(error);
         },
         (response) => {
            this.store.successStatus = response;
         });
   }
}