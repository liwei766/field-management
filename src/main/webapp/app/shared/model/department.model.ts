import { IEmployee } from 'app/shared/model//employee.model';

export interface IDepartment {
  id?: number;
  departmentName?: string;
  locationId?: number;
  employees?: IEmployee[];
}

export const defaultValue: Readonly<IDepartment> = {};
