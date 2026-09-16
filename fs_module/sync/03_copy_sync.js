const fs = require("fs");

try {
    // copyFileSync() is used to copy a file

    fs.copyFileSync("hello.txt", "hello1.txt");

    console.log("File copied successfully");
} catch (err) {
    console.log(err);
}
