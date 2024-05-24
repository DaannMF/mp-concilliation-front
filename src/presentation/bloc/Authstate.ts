import type { DataError } from "../../core/domain/DataError";
import type { User } from "../../domain/entities/auth";
import { Base64 } from "js-base64";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
interface State {
   password: string,
   username: string,
   userData: User | null;
   token?: string | null,
   error?: string,
   serverError?: DataError,
   tokenExpired: Boolean,
   loadingRequest: boolean,
   regStatus: Boolean,
   successStatus: boolean,
}
const useAUthState = defineStore('AuthState', {
   state: (): State => {
      return {
         password: "",
         username: "",
         userData: null,
         token: null,
         error: undefined,
         serverError: undefined,
         tokenExpired: false,
         loadingRequest: false,
         regStatus: false,
         successStatus: false,
      }
   },
   getters: {
      isAuthenticated: (state) => state.token !== null,
   },
   actions: {
      initAuth() {
         const token = localStorage.getItem('token');
         if (!token) {
            localStorage.clear();
            this.token = null;
            return;
         }

         const partsOfToken = token.split('.');
         const middleString = Base64.decode(partsOfToken[1]);
         const payload = JSON.parse(middleString);
         const userData = payload;
         const tokenTimestamp = payload.exp;
         const currentTime = Date.now();

         if (tokenTimestamp <= currentTime) {
            localStorage.clear();
            this.token = null;
            this.error = "Your session has expired, Kinldy login Again!";
            return;
         }

         this.userData = userData;
         localStorage.setItem('userData', JSON.stringify(userData));
         this.token = token;
      },
      logout() {
         const router = useRouter();
         this.error = "Your session has expired, Kinldy login Again!";
         localStorage.clear();
         this.token = null;
         router.push({ name: 'Login' });
      },
   }
});

export default useAUthState;

export type AuthenticationStore = Omit<
   ReturnType<typeof useAUthState>,
   keyof ReturnType<typeof defineStore>
>;
