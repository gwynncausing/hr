

export const useTaskTimer = (timeInput: Ref<any>): TaskTimer => {
  let timerActive = ref(false);
  let seconds = ref(0);
  let minutes = ref(0);
  let hours = ref(0);
  let editMode = ref(false);
  let editedTime = ref('');

  const formattedTime = computed(() => {
    const hoursStr = hours.value < 10 ? `0${hours.value}` : `${hours.value}`;
    const minutesStr = minutes.value < 10 ? `0${minutes.value}` : `${minutes.value}`;
    const secondsStr = seconds.value < 10 ? `0${seconds.value}` : `${seconds.value}`;
    return `${hoursStr}:${minutesStr}:${secondsStr}`;
  });

  let timerInterval: NodeJS.Timeout | null = null;

  const startTimer = () => {
    timerActive.value = true;
    timerInterval = setInterval(() => {
      seconds.value++;
      if (seconds.value === 60) {
        seconds.value = 0;
        minutes.value++;
      }
      if (minutes.value === 60) {
        minutes.value = 0;
        hours.value++;
      }
      if (minutes.value > 59) {
        minutes.value = 59;
      }
      if (seconds.value > 59) {
        seconds.value = 59;
      }
    }, 1000);
  };

  const stopTimer = (): { hours: number; minutes: number; seconds: number } => {
    timerActive.value = false;
    if (timerInterval) clearInterval(timerInterval);

    return {
      hours: hours.value,
      minutes: minutes.value,
      seconds: seconds.value,
    };
  };

  const editTime = () => {
    editMode.value = true;
    editedTime.value = formattedTime.value;
    nextTick(() => {
      if (timeInput.value) {
        if (timeInput.value instanceof HTMLInputElement)
          ((timeInput?.value) as HTMLInputElement).focus();
        else {
          // if UInput
          timeInput.value.input.focus();
        }
      }
    });
  };

  const resetTimer = () => {
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
  };

  const saveEditedTime = () => {
    editMode.value = false;
    const [editedHours, editedMinutes, editedSeconds] = editedTime.value.split(':').map(Number);
    hours.value = editedHours;
    minutes.value = editedMinutes > 59 ? 59 : editedMinutes;
    seconds.value = editedSeconds > 59 ? 59 : editedSeconds;
  };

  const setTime = (newHours: number, newMinutes: number, newSeconds: number) => {
    hours.value = newHours;
    minutes.value = newMinutes;
    seconds.value = newSeconds;
  };

  const getTime = (): { hours: number; minutes: number; seconds: number } => {
    return {
      hours: hours.value,
      minutes: minutes.value,
      seconds: seconds.value,
    };
  };

  return {
    seconds,
    minutes,
    hours,
    formattedTime,
    timerActive,
    editMode,
    editedTime,
    startTimer,
    stopTimer,
    resetTimer,
    editTime,
    saveEditedTime,
    setTime,
    getTime,
  };
};
