import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      isLoggedIn: false,
    }
  },
  actions: {
    updateState(isLoggedInState: boolean) {
      this.isLoggedIn = isLoggedInState;
      // localStorage.setItem('isLoggedIn', this.isLoggedIn + '')
    }
  },
  getters: {
    getIsLoggedIn(state) { return state.isLoggedIn }
  },
  persist: true,
})