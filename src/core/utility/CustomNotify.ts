import { useNotification, NotificationsOptions } from "@kyvg/vue3-notification";

const title: string = "Conciliación de pagos";
const duration: number = 3000;
const speed: number = 1500;

class CustomNotification {
   private notifierInstance: any

   constructor() {
      this.notifierInstance = useNotification()
   }

   success(message: string) {
      const options: NotificationsOptions = {
         title: title,
         text: message,
         type: "success",
         duration: duration,
         speed: speed,
      }

      this.notifierInstance.notify(options);
   }

   error(message: string) {
      const options: NotificationsOptions = {
         title: "Error " + title,
         text: message,
         type: "error",
         duration: duration,
         speed: speed,
      }

      this.notifierInstance.notify(options);
   }
}

export default CustomNotification;