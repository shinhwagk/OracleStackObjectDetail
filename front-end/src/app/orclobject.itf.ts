import { Input } from './input.itf';
import { Detail } from './detail.itf';

export interface OrclObject {
  name: string;
  input: Input;
  details: Detail[];
}
