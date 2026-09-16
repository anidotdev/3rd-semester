const fs = require("fs");

// copyFile() is used to create a copy of a file

fs.copyFile("hello.txt", "hello1.txt", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File copied successfully");
    }
});
