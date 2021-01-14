function printHello(name){
    console.log("Hello" +name);
    return name + " hello!";
}
console.log(printHello.name);

// 2. Function Invocation
let result = printHello("Thanisorn !");
console.log(result);