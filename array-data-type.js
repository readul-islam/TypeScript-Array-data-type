/* array data type declare two way */
//1. string/number/boolean[]
var x;
x = ['ami', 'tumi', 'say'];
x.map(function (x) { return console.log(x); });
//2.Array<string>/<number>/<boolean>
var c;
c = ['ami', 'tumi', 'say'];
//3. mutliple type use for array
var z;
z = ['ami', 'tumi', 'say', 10, 20, 30];
z.sort();
console.log(z);
