const fs = require("fs");

try {
    // rmdirSync() is used to delete a folder

    fs.rmdirSync("./new-folder");

    console.log("Folder deleted successfully");
} catch (err) {
    console.log(err);
}
