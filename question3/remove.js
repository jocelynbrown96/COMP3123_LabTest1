//Lab Test 1, Question 3: File Module
//Remove log files and the Logs directory.

const fileSystem = require('fs');
const logFilePath = require('path');

//Build the Logs path from the current working directory.
const logPath = logFilePath.join(process.cwd(), 'Logs');

//Check if the Logs directory exists before attempting to remove files.
if (fileSystem.existsSync(logPath)) {
    //Read and sort the filenames to match the expected output.
    const logFiles = fileSystem.readdirSync(logPath).sort();

    //Remove each log file in the Logs directory.
    logFiles.forEach(logFileName => {
        //Build the full path to the individual file.
        const fullLogFilePath = logFilePath.join(logPath, logFileName);
        fileSystem.unlinkSync(fullLogFilePath);

        //Print the name of each deleted file.
        console.log(`delete files...${logFileName}`);
    });

    //Remove the Logs directory after it is empty.
    fileSystem.rmdirSync(logPath);
} else {
    //Explain why no files were removed.
    console.log('Logs directory does not exist. No files were removed.');
}
