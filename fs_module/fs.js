const fs = require("fs");

// appendFile() is used to create a file
// or add content to an existing file

fs.appendFile("hey.txt", "ok", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("File created successfully");
    }

});

// rename() is used to rename a file

fs.rename("hey.txt", "hello.txt", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("File renamed successfully");
    }

});


// copyFile() is used to create a copy of a file

fs.copyFile("hello.txt", "hello1.txt", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("File copied successfully");
    }

});

// readFile() is used to read the contents of a file

fs.readFile("hello.txt", "utf8", function (err, data) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("File content:", data);
    }

});

// unlink() is used to delete a file

fs.unlink("hello1.txt", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("File deleted successfully");
    }

});

// mkdir() is used to create a folder

fs.mkdir("./new-folder", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Folder created successfully");
    }

});


// rmdir() is used to delete a folder

fs.rmdir("./new-folder", function (err) {

    if (err) {
        console.log(err);
    }
    else {
        console.log("Folder deleted successfully");
    }

});

try {

    // appendFileSync() creates a file
    // or adds content to an existing file

    fs.appendFileSync("hey.txt", "ok");

    console.log("File created successfully");

}
catch (err) {

    console.log(err);

}
