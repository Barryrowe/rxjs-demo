let rx = require("rxjs");
let utils = require("./utils.js");

utils.printHeader("Previously Emitted Values w/ Behavior Subject");

let Observable = rx.Observable;
let Subject = rx.Subject;
let BehaviorSubject = rx.BehaviorSubject;

let d2Count = 0;
let delayed2sec = new Subject();
delayed2sec.subscribe((val) => console.log("short emitted: ", val));
setInterval(() => delayed2sec.next(++d2Count), 2000);
let d5Count = 0;
let delayed5sec = new Subject();
delayed5sec.subscribe((val) => console.log(" long emitted: ", val));
setInterval(() => delayed5sec.next(++d5Count), 5000);

/* Behavior Subject Example */
let behaviorImmediate = new BehaviorSubject("The Initial Value!");
behaviorImmediate.subscribe((val) => console.log("Behavior Result", val));
Observable.zip(behaviorImmediate, delayed2sec, delayed5sec)
          .subscribe((results) => console.log("ZIP RESULT :===> ", results));
behaviorImmediate.next("ANOTHER VALUE!!");
