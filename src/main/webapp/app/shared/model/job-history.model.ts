import { Moment } from 'moment';

export const enum Language {
  FRENCH = 'FRENCH',
  ENGLISH = 'ENGLISH',
  SPANISH = 'SPANISH'
}

export interface IJobHistory {
  id?: number;
  startDate?: Moment;
  endDate?: Moment;
  language?: Language;
  jobId?: number;
  departmentId?: number;
  employeeId?: number;
}

export const defaultValue: Readonly<IJobHistory> = {};
