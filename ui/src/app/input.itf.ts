import { InputType } from './input-type.enum';

export interface Input {
  type: InputType;
  value?: string;
}
