let rx = require("rxjs");
let Observable = rx.Observable;

let of = Observable.of(['a', 'b', 'c']);
of.subscribe((val) => console.log("Of Created Emit", val)); //expect out: array

let stuff = Observable.from([1, 2, 3, 4, 5]);
stuff.subscribe((s) => console.log("Stuff Emit", s)); //expect out: each value individually
