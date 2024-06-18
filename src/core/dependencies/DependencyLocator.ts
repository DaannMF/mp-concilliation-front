import type { AuthenticationStore } from "../../presentation/bloc/auth/AuthState";
import CustomAxios from "../utility/CustomAxios";
import { AuthRepository } from "../../data/repository/AuthRepository";
import { LoginUseCase } from "../../domain/use-cases/auth/LoginUseCase";
import { AuthBloc } from "../../presentation/bloc/auth/AuthBloc";
import { useRouter } from "vue-router";
import useAUthState from "../../presentation/bloc/auth/AuthState";
import usePaymentState from "../../presentation/bloc/payments/PaymentState";
import { ResetPasswordUseCase } from "../../domain/use-cases/auth/ResetPassWordUseCase";
import { PaymentStore } from "../../presentation/bloc/payments/PaymentState";
import { PaymentBloc } from "../../presentation/bloc/payments/PaymentBloc";
import { SearchPaymentsUseCase } from "../../domain/use-cases/payments/SearchPaymentsUseCase";
import { PaymentRepository } from "../../data/repository/PaymentRepository";
import { UpdatePaymentUseCase } from "../../domain/use-cases/payments/UpdatePaymentUseCase";
import CustomNotification from "../utility/CustomNotify";

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

const providePaymentPloc = (store?: PaymentStore) => {
   const router = useRouter();
   if (!store) {
      store = usePaymentState();
   }
   const axios = provAxiosInstance();
   const paymentRepository = new PaymentRepository({ axios });
   const searchUseCase = new SearchPaymentsUseCase({ paymentRepository });
   const updatePaymentUseCase = new UpdatePaymentUseCase({ paymentRepository });
   const notifier = new CustomNotification();

   return new PaymentBloc({
      store: store,
      router,
      searchUseCase,
      updatePaymentUseCase,
      notify: notifier
   });
}

export const DependencyLocator = {
   provideAuthPloc,
   providePaymentPloc,
}