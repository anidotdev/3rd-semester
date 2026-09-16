const fs = require("fs");

// appendFile() is used to create a file
// or add content to an existing file

fs.appendFile("hey.txt", "ok", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});
