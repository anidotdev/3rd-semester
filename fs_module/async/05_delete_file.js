const fs = require("fs");

// unlink() is used to delete a file

fs.unlink("hello1.txt", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});
