
import { TaskModel } from './TaskModel';

export type TaskStateModel = {
    
    task: TaskModel[];
    secondsRemaining: number;
    formattedTime: string;
    activeTask: TaskModel | null;
    currentCicle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};