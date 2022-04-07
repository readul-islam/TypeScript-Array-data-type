/* array data type declare two way */
//1. string/number/boolean[]
let x: string[];   

x = ['ami', 'tumi','say']
x.map(x=>console.log(x))

//2.Array<string>/<number>/<boolean>

let c: Array<string>;
 c =['ami', 'tumi','say']

//3. mutliple type use for array
let z : (string | number)[];
z = ['ami', 'tumi','say' ,10, 20 , 30];
z.sort()
console.log(z)
