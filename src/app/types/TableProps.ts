import { Advocate } from './Advocate';

export type TableProps = {
  filteredAdvocates: Advocate[];
};

export type Column = {
  name: string;
  key: keyof Advocate;
};
