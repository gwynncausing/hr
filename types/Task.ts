export type TaskTimerItem = {
  title: string;
  description?: string;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export type TaskTimer = {
  seconds: Ref<number>;
  minutes: Ref<number>;
  hours: Ref<number>;
  formattedTime: ComputedRef<string>;
  timerActive: Ref<boolean>;
  editMode: Ref<boolean>;
  startTimer: () => void;
  stopTimer: () => { hours: number; minutes: number; seconds: number }; // Updated return type for stopTimer
  resetTimer: () => void;
  editTime: () => void;
  saveEditedTime: () => void;
  setTime: (hours: number, minutes: number, seconds: number) => void; // Added setTime function
  getTime: () => { hours: number; minutes: number; seconds: number }; // Added getTime function
  editedTime: Ref<string>;
}