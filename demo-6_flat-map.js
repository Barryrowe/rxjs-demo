let rx = require("@reactivex/rxjs");
let utils = require("./utils.js");

utils.printHeader("Folding in Async operations with FlatMap");

let Observable = rx.Observable;
let Subject = rx.Subject;

/* Flat Map Example */
let fakeApiCall = (inputs) => {
  return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve(`Input has ${inputs.length} characters.`);
      }, 2000);
    });
};

let apiTrigger = new Subject();

apiTrigger.do((val) => console.log("Value Sent In: ", val))
         .map((emittedValue) => `\$pre_${emittedValue}_post\$`)
         .do((val) => console.log("Value After Map: ", val))
         .flatMap((inputs) => Observable.fromPromise(fakeApiCall(inputs)),
                  (inputs, returnedData) => ({inputs, returnedData}))
         .subscribe(({inputs, returnedData}) =>  console.log("\tInputs: ", inputs, "\n\tAPI Return:", returnedData));

apiTrigger.next("tacosneverlie"); 

var stdin = process.openStdin();
stdin.addListener("data", (d) => apiTrigger.next(d.toString().trim()));