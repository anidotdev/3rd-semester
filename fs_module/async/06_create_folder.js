const fs = require("fs");

// mkdir() is used to create a folder

fs.mkdir("./new-folder", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder created successfully");
    }
});
