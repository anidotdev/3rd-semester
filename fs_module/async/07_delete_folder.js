const fs = require("fs");

// rmdir() is used to delete a folder

fs.rmdir("./new-folder", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder deleted successfully");
    }
});
