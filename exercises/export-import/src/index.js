import { moment } from 'moment/moment';
import {SUPER_VALUE} from './math';
import {sum, VALUE, settings as dimentions} from './math';
import math from './math'
import Validator, {min,max} from './validator'

console.log("Super value is " + SUPER_VALUE);

if (dimentions.width > 1000) {
    console.log('Woah this is huge!!');
}

