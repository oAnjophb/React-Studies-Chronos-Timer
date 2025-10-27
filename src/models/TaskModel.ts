export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime'
};
