import {createApp} from "vue";

declare module "vue/types/vue" {
  interface createApp {
    $moment: any
  }
}
