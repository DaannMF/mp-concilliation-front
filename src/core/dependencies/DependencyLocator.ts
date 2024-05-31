import type { AuthenticationStore } from "../../presentation/bloc/AuthState";
import CustomAxios from "../utility/CustomAxios";
import { AuthRepository } from "../../data/repository/AuthRepository";
import { LoginUseCase } from "../../domain/use-cases/auth/LoginUseCase";
import { AuthBloc } from "../../presentation/bloc/AuthBloc";
import { useRouter } from "vue-router";
import useAUthState from "../../presentation/bloc/AuthState";
import { ResetPasswordUseCase } from "../../domain/use-cases/auth/ResetPassWordUseCase";

const provAxiosInstance = () => {
   const token = localStorage.getItem('token');
   const axios = new CustomAxios({ token: token });
   return axios;
}

const provideAuthPloc = (store?: AuthenticationStore) => {
   const router = useRouter();
   if (!store) {
      store = useAUthState();
   }
   const axios = provAxiosInstance();
   const authRepository = new AuthRepository({ axios });
   const loginUseCase = new LoginUseCase({ authRepository });
   const resetPasswordUseCase = new ResetPasswordUseCase({ authRepository });

   return new AuthBloc({
      store: store,
      router,
      loginUseCase,
      resetPasswordUseCase,
   });
}

export const DependencyLocator = {
   provideAuthPloc,
}