import { useUserStore } from "@/stores/User"

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from);
  const userStore = useUserStore();
  console.log("🚀 ~ defineNuxtRouteMiddleware ~ userStore.getIsLoggedIn:", userStore.getIsLoggedIn)
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

