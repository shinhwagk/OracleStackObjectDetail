import { Input } from './input';
import { Detail } from './detail';

export interface Object {
  name: string;
  input: Input;
  details: Detail[];
}
