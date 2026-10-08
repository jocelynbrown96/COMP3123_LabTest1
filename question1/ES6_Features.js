function lowerCaseWords(mixedArray) {
  //Return a promise that can either succeed or fail based on the input array.
    return new Promise((resolve, reject) => {
        //Reject any non-array input.
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array!");
            return;
        }
        
        //Keep only the string elements and convert them to lowercase.
        const lowerCaseArray = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());

        //Resolve the promise with the new array of lowercase words.
        resolve(lowerCaseArray);
    });
}

//Sample input  declaration as per given instructions, containing a mixed array of strings and non-string elements.
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

//Example 1: An array triggers the success path.
lowerCaseWords(mixedArray)
    .then(words => {
        //Print the resolved array of lowercase words to the console.
        console.log(words); //Output: ['pizza', 'wings']
    })
    .catch(error => {
        //Print the rejection message to the console if the call fails.
        console.error(error);
    });

//Example 2: A string triggers the rejection path.
lowerCaseWords('PIZZA')
    .then(words => {
        //This block will not execute since the input is not an array.
        console.log(words);
    })
    .catch(error => {
        //Print the rejection message to the console.
        console.error(error); //Output: "Input must be an array!"
    });