import { defineStore } from "pinia";
import { AuthenticationContext } from "../lib/definitions";

export const useAuthStore = defineStore("auth", {
  state: (): { auth: AuthenticationContext | null } => ({
    /** {{ User | null }} */
    auth: null,
  }),
  getters: {
    currentAuth(state) {
      return state.auth;
    },
  },
  actions: {
    clearAuth() {
      this.auth = null;
    },

    updateAuth(newAuth: AuthenticationContext) {
      this.auth = newAuth;
    },
  },
});
