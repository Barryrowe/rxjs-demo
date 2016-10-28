let rx = require("rxjs");
let Observable = rx.Observable;

let of = Observable.of(['a', 'b', 'c']);
of.subscribe((val) => console.log("Of Created Emit", val)); //expect out: array

let stuff = Observable.from([1, 2, 3, 4, 5]);
stuff.subscribe((s) => console.log("Stuff Emit", s)); //expect out: each value individually

let multiplyBy5 = stuff.map((num) => num*5); //expect out: 5, 10, 15, 20, 25
let subtractOne = stuff.map((num) => num-1); //expect out: 0, 1, 2, 3, 4

multiplyBy5.subscribe((result) => console.log("result * 5: ", result));
subtractOne.subscribe((result) => console.log("subtract 1: ", result));