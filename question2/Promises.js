//Lab Test 1, Question 2: Promises

//Return a promise that succeeds after 500 milliseconds.
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            //Resolve the promise with the success object as per given instructions.
            resolve({ message: "delayed success!" });
        }, 500);
    });
};

//Return a promise that fails after 500 milliseconds.
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Reject the promise with the failure object as per given instructions.
            reject({ error: "delayed exception!" });
        }, 500);
    });
};

//Call the success example and handle the resolved promise.
resolvedPromise()
    .then(result => {
        //Print the resolved object to the console.
        console.log(result); //Output: { message: "delayed success!" }
    })
    .catch(error => {
        //Handle a rejection, though the block will not execute in this case.
        console.error(error);
    });

//Call the failure example and handle the rejected promise.
rejectedPromise()
    .then(result => {
        //This block will not execute since the promise is rejected.
        console.log(result);
    })
    .catch(error => {
        //Print the rejection object to the console.
        console.error(error); //Output: { error: "delayed exception!" }
    });
