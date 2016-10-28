let rx = require("rxjs");
let Observable = rx.Observable;
let Subject = rx.Subject;

/* Subject Delay Example */
let subj = new Subject();

setInterval(() => {
   subj.next(Date.now());
}, 2000);

subj.subscribe((result) => console.log("Now: ", result));
