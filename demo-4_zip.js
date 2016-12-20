let rx = require("rxjs");
let utils = require("./utils.js");

utils.printHeader("The Zip operator, plus timing of Emissions");

let Observable = rx.Observable;
let Subject = rx.Subject;

/* Zip Example */
let immediate = new Subject();
immediate.next("IMMEDIATELY"); //Emitted before anything subscribes
immediate.subscribe((val) => console.log("immediate result", val));

let delayed2sec = new Subject();
setInterval(() => delayed2sec.next("DELAYED 2"), 2000);
let delayed5sec = new Subject();
setInterval(() => delayed5sec.next("DELAYED 5"), 5000);

Observable.zip(immediate, delayed2sec, delayed5sec)
         .subscribe((results) => console.log(results));
immediate.next("AFTER THE ZIP");