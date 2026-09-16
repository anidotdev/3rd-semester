const fs = require("fs");

try {
    // mkdirSync() is used to create a folder

    fs.mkdirSync("./new-folder");

    console.log("Folder created successfully");
} catch (err) {
    console.log(err);
}
