const fs = require("fs");

try {
    // unlinkSync() is used to delete a file

    fs.unlinkSync("hello1.txt");

    console.log("File deleted successfully");
} catch (err) {
    console.log(err);
}
