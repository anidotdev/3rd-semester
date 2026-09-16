const fs = require("fs");

try {
    // appendFileSync() creates a file
    // or adds content to an existing file

    fs.appendFileSync("hey.txt", "ok");

    console.log("File created successfully");
} catch (err) {
    console.log(err);
}
