const fs = require("fs");

fs.writeFileSync("student.txt", "Name: Animesh\nAge: 20");

console.log("File created.");

const data = fs.readFileSync("student.txt", "utf8");

console.log("\nFile content:");
console.log(data);

fs.appendFileSync("student.txt", "\nCourse: B.Tech CSE");

console.log("\nFile updated.");

const updatedData = fs.readFileSync("student.txt", "utf8");

console.log("\nUpdated file content:");
console.log(updatedData);

fs.unlinkSync("student.txt");

console.log("\nFile deleted.");
