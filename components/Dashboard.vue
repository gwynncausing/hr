<template>
  <TaskTimerWrapper>
    <TaskTimer @on-add-task-timer-item="addTaskTimerItem" />
  </TaskTimerWrapper>

  <TaskTimerWrapper class="mt-4 pt-2 space-y-2">
    <TaskTimer v-for="(item, index) in taskTimerItem.slice().reverse()" :key="index" :task-timer-item="item"
      class="pb-3 mb-4 border-b-2 border-green-400 last-of-type:border-none" />
  </TaskTimerWrapper>

  <UPopover :popper="{ placement: 'bottom-start' }">
    <UButton icon="i-heroicons-calendar-days-20-solid" :label="format(date, 'd MMM, yyy')" />

    <template #panel="{ close }">
      <DatePicker v-model="date" @close="close" />
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
const taskTimerItem: Ref<TaskTimerItem[]> = ref([
  {
    title: "test 1",
    hours: 1,
    minutes: 0,
    seconds: 0,
  },
  {
    title: "test 2",
    description: "adasdasdsa",
    hours: 1,
    minutes: 0,
    seconds: 0,
  },
  {
    title: "test 3",
    hours: 1,
    minutes: 0,
    seconds: 0,
  },
])

const addTaskTimerItem = (item: TaskTimerItem) => {
  taskTimerItem.value = [
    ...taskTimerItem.value,
    item
  ]
}

import { format } from 'date-fns'

const date = ref(new Date())
</script>

<style></style>