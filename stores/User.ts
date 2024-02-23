import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      isLoggedIn: false,
    }
  },
  actions: {
    updateState(isLoggedInState: boolean) {
      this.isLoggedIn = isLoggedInState;
    }
  },
  getters: {
    getIsLoggedIn(state) { return state.isLoggedIn }
  },
  persist: true
})