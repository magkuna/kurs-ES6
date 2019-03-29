import {SUPER_VALUE} from './math'

const min = 10;
const max = SUPER_VALUE;
export { min, max };
export default class Validator {
  constructor(value) {
    this.value = value;
  }
  isValid() {
    return this.value > min && this.value < max;
  }
};