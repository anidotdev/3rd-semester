const fs = require("fs");

try {
    // readFileSync() is used to read a file

    const data = fs.readFileSync("hello.txt", "utf8");

    console.log("File content:", data);
} catch (err) {
    console.log(err);
}
