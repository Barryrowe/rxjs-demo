let rx = require("@reactivex/rxjs");
let Observable = rx.Observable;
////let Subject = rx.Subject;
//////let BehaviorSubject = rx.BehaviorSubject;

let of = Observable.of(['a', 'b', 'c']);
of.subscribe((val) => console.log("Of Created Emit", val)); //expect out: array

let stuff = Observable.from([1, 2, 3, 4, 5]);
stuff.subscribe((s) => console.log("Stuff Emit", s)); //expect out: each value individually

//let multiplyBy5 = stuff.map((num) => num*5); //expect out: 5, 10, 15, 20, 25
//let subtractOne = stuff.map((num) => num-1); //expect out: 0, 1, 2, 3, 4

//multiplyBy5.subscribe((result) => console.log("result * 5: ", result));
//subtractOne.subscribe((result) => console.log("subtract 1: ", result));

/* Subject Delay Example */
////let subj = new Subject();
////
////setInterval(() => {
////    subj.next(Date.now());
////}, 2000);

////subj.subscribe((result) => console.log("Now: ", result));

/* Zip Example */
//////let immediate = new Subject();
//////immediate.next("IMMEDIATELY"); //Emitted before anything subscribes
//////immediate.subscribe((val) => console.log("immediate result", val));

//////let delayed2sec = new Subject();
//////setInterval(() => delayed2sec.next("DELAYED 2"), 2000);
//////let delayed5sec = new Subject();
//////setInterval(() => delayed5sec.next("DELAYED 5"), 5000);

//////Observable.zip(immediate, delayed2sec, delayed5sec)
//////          .subscribe((results) => console.log(results));
//////immediate.next("AFTER THE ZIP");


/* Behavior Subject Example */
////////let behaviorImmediate = new BehaviorSubject("The Initial Value!");
////////behaviorImmediate.subscribe((val) => console.log("Behavior Result", val));
////////Observabel.zip(behaviorImmediate, delayed2sec, delayed5sec);


/* Flat Map Example */
//////////let fakeApiCall = (inputs) => {
//////////   return new Promise((resolve, reject) => {
//////////        setTimeout(() => {
//////////            resolve({token:"HSDFJ_234235_www###", userId:"tacosneverlie"});
//////////       }, 2000);
//////////     });
//////////};

//////////let apiTrigger = new Subject();

//////////apiTrigger.do((val) => console.log("Value Sent In: ", val))
//////////          .map((emittedValue) => ({ data: emittedValue}))
//////////          .do((val) => console.log("Value After Map: ", val))
//////////          .flatMap((inputs) => Observable.fromPromise(fakeApiCall(inputs)),
//////////                   (inputs, returnedData) => ({inputs, returnedData}))
//////////          .subscribe(({inputs, returnedData}) =>  console.log("Inputs: ", inputs, "API Return:", returnedData));

//////////apiTrigger.next({un:"tacosneverlie", pw:"carnitas4lyfe"}); 

//////////var stdin = process.openStdin();
//////////stdin.addListener("data", (d) => apiTrigger.next(d.toString()));
