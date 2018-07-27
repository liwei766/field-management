import { ITask } from 'app/shared/model//task.model';

export interface IJob {
  id?: number;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  employeeId?: number;
  tasks?: ITask[];
}

export const defaultValue: Readonly<IJob> = {};
