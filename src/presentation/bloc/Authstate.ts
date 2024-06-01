import type { DataError } from "../../core/domain/DataError";
import { User } from "../../domain/entities/auth"
import { Base64 } from "js-base64";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
interface State {
   user: User | null,
   username: string,
   password: string,
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
         user: null,
         username: "",
         password: "",
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

         const partsOfToken: string[] = token.split('.');
         const middleString: string = Base64.decode(partsOfToken[1]);
         const payload = JSON.parse(middleString);
         const userData: User = payload;
         const tokenTimestamp: number = payload.exp;
         const currentTime = Date.now() / 1000 | 0;

         if (tokenTimestamp <= currentTime) {
            localStorage.clear();
            this.token = null;
            this.error = "Your session has expired, Kinldy login Again!";
            return;
         }

         this.user = userData;
         localStorage.setItem('userData', JSON.stringify(userData));
         this.token = token;
      },
      logout() {
         localStorage.clear();
         this.token = null;
         this.$reset();
      },
   }
});

export default useAUthState;

export type AuthenticationStore = Omit<
   ReturnType<typeof useAUthState>,
   keyof ReturnType<typeof defineStore>
>;
