
var isDone: number = 123;
var is = true;

interface Shape {
  color: string
}

interface Squre extends Shape {
  sideLength: number
}

var a = {
  a: 1,
  b: 2
};

console.log(a);

export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export module Shapes {
  var inside:number = 123;
  export var outside:number = inside;
}

function buildName(firstName:string, ...restNames: Array<string>): string {
  var l:Array<string> = restNames;
  restNames.splice(0, 0, firstName);
  return restNames.join(' ');
}

console.log(buildName('kaka:', '1', '2', '3'));

interface Box {
  a: number,
  b: number
}

interface Box {
  c: string
}