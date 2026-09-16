const fs = require("fs");

// readFile() is used to read the contents of a file

fs.readFile("hello.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("File content:", data);
    }
});
