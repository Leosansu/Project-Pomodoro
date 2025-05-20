// Import or define TaskStateModel before using it
import { TaskStateModel } from './TaskStateModel'; // Adjust the path as needed

export type TaskModel = {
    id: string;
    nome: string;
    duracao: number;
    startDate: number;
    completeDate: number | null;
    interruptedDate: number | null;
    type: keyof TaskStateModel['config'];

}
