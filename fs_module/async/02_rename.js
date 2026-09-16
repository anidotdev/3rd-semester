const fs = require("fs");

// rename() is used to rename a file

fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});
