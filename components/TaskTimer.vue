<template>
  <div class="flex gap-4">
      <div>
        <UButton
          @click="startTimer" 
          v-if="!timerActive"
          :disabled="editMode"
          icon="i-heroicons-play-solid"
          size="xs"
          color="primary"
          :ui="{ rounded: 'rounded-full' }"
          variant="solid"
        />
        <UButton
          @click="stopTimerLocal" v-if="timerActive && !editMode"
          icon="i-heroicons-stop-solid"
          size="xs"
          color="red"
          :ui="{ rounded: 'rounded-full' }"
          variant="solid"
        />
      </div>
      <div class="flex-1">
        <div>
          <UInput v-model="title" color="primary" class="text-gray-700 border-b border-b-green-200" variant="none" size="sm" placeholder="Title" />
        </div>
        <div>
          <UInput v-model="description" class="text-gray-500" color="primary" variant="none" size="2xs" placeholder="Description" />
        </div>
      </div>
      <div class="contents">
        <div>
          <span @click="editTime" v-if="!editMode" class="text-gray-700 w-[80px] block text-sm px-2.5 py-1.5">{{ formattedTime }}</span>
          <UInput ref="timeInput" type="text" v-model="editedTime" @keydown.enter="saveEditedTime" @blur="saveEditedTime" v-else class="text-gray-700 w-[80px] block" color="primary" variant="none" size="sm" />
        </div>
      </div>
      <div class="flex flex-nowrap gap-2 h-fit">
        <!-- <UButton
          icon="i-heroicons-ellipsis-vertical-16-solid"
          size="xs"
          color="primary"
          :ui="{ rounded: 'rounded-full' }"
          variant="solid"
        /> -->
        <UButton
          icon="i-heroicons-trash-solid"
          size="xs"
          color="red"
          :ui="{ rounded: 'rounded-full' }"
          variant="solid"
        />
      </div>
  </div>
</template>

<script lang="ts" setup>

const emit = defineEmits(['onAddTaskTimerItem'])

const timeInput = ref(null);
const {
  editMode,
  timerActive,
  editedTime,
  formattedTime,
  saveEditedTime,
  startTimer,
  stopTimer,
  resetTimer,
  editTime,
  setTime,
  getTime
} = useTaskTimer(timeInput);

const title = ref('')
const description = ref('')
const props = defineProps<{
  taskTimerItem?: TaskTimerItem
}>()
watchEffect( () => {
  const task = props.taskTimerItem
  if(task) {
    title.value = task.title

    if(task.description)
      description.value = task.description

    setTime(
      task.hours ?? 0,
      task.minutes ?? 0,
      task.seconds ?? 0
    )
  }
})

const stopTimerLocal = () => {
  stopTimer() // save the return data here
  emit('onAddTaskTimerItem', {
    ...getTime(),
    title: title.value,
    description: description.value,
  })
  resetTaskTimer()
}

const resetTaskTimer = () => {
  resetTimer()
  title.value = ''
  description.value = ''
}
</script>

<style>

</style>