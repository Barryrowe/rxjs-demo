let rx = require("rxjs");
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
         .map((emittedValue) => `PRE_${emittedValue}_POST`)
         .do((val) => console.log("Value After Map: ", val))
         .flatMap((inputs) => Observable.fromPromise(fakeApiCall(inputs)),
                  (inputs, returnedData) => ({inputs, returnedData}))
         .subscribe(({inputs, returnedData}) =>  console.log("Inputs: ", inputs, "API Return:", returnedData));

apiTrigger.next("tacosneverlie"); 

var stdin = process.openStdin();
stdin.addListener("data", (d) => apiTrigger.next(d.toString().trim()));