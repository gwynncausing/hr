<template>
  <div class="px-12 h-screen flex items-center justify-center">
    <UForm :schema="schema" :state="state" class="w-full inline-grid gap-4 max-w-lg" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>
  
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>
  
      <UButton type="submit" class="ml-auto mr-0" :loading="isSubmitting">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { useUserStore } from '@/stores/User';

const schema = object({
  email: string().email('Invalid email').required('Email cannot be empty'),
  password: string()
    // .min(8, 'Must be at least 8 characters')
    .required('Password cannot be empty')
})

const state = reactive({
  email: undefined,
  password: undefined
})
const isSubmitting: Ref<boolean> = ref(false);

const body = computed(() => ({
  email: state.email,
  password: state.password
}))
// setPageLayout('login')

const userStore = useUserStore()
const { data, execute, error } = await useFetch('/api/login', {
  method: 'POST',
  watch: false,
  immediate: false,
  body,
  onResponse({response}) {
    const data = response._data
    if(response.status === 200) {
      userStore.updateState(true);
      const router = useRouter();
      router.go(0);
    }
  }
});

async function onSubmit () {
  isSubmitting.value = true;
  await execute();
  
  if(error) {
    console.log("object", error.value?.data.message);
    isSubmitting.value = false;
  }
}
</script>