//Lab Test 1, Question 3: File Module
//Create log files using the file system module.

const fileSystem = require('fs');
const logFilePath = require('path');

//Build the Logs path from the current working directory.
const logPath = logFilePath.join(process.cwd(), 'Logs');

//Create the Logs directory if it doesn't already exist.
if (!fileSystem.existsSync(logPath)) {
    fileSystem.mkdirSync(logPath);
}

//Change this Node process to the Logs directory.
process.chdir(logPath);

//Create ten log files numbered 0 through 9.
for (let i = 0; i < 10; i++) {
    const logFileName = `log${i}.txt`;
    fileSystem.writeFileSync(logFileName, `This is log file number ${i}.`);

    //Print the name of each created file.
    console.log(logFileName);
}


