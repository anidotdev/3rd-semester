const fs = require("fs");

try {
    // renameSync() is used to rename a file

    fs.renameSync("hey.txt", "hello.txt");

    console.log("File renamed successfully");
} catch (err) {
    console.log(err);
}
