// import validation = require('./basic-types');
import {StringValidator, Shapes} from './basic-types';
class LettersValidation implements StringValidator {
  isAcceptable(s:string){
    return !!s;
  }
}
var s:StringValidator = new LettersValidation();
var sS:number = Shapes.outside;