import type { Router } from "vue-router";
import type { DataError, ErrorFold } from "./domain/DataError";
import { ErrorKind } from "../domain/entities/enums/ErrorKind"

export class Ploc<T> {
   public store: T;
   public router: Router;

   constructor({ store, router }: { store: T, router: Router }) {
      this.store = store;
      this.router = router;
   }

   handleErrors(error: DataError): string {
      let err = '';
      switch (error.kind) {
         case ErrorKind.UnexpectedError:
            const unexpectedError = error as Extract<DataError, { kind: "UnexpectedError" }>;
            err = unexpectedError.error.message;
            break;
         case ErrorKind.ServerError:
            const serverError = error as Extract<DataError, { kind: "ServerError" }>;
            err = serverError.error.message;
            break;
         case ErrorKind.ErrorFold:
            const errorDataArray = error as ErrorFold;
            err = errorDataArray.error[0].message;
            break;
         case ErrorKind.AuthenticationError:
            this.router.push({ name: 'Login' });
            break;
         default:
            err = 'An Error Occurred';
            break;
      }
      return err;
   }
} 