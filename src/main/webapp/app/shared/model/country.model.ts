export interface ICountry {
  id?: number;
  countryName?: string;
  regionId?: number;
}

export const defaultValue: Readonly<ICountry> = {};
