import { useUserStore } from "@/stores/User"

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to, from);
  const userStore = useUserStore();
  if(userStore.getIsLoggedIn) {
    setPageLayout('user')
  }
  else {
    setPageLayout('login')
    if(to.path !== '/') {
      return navigateTo('/')
    }
  }
})

