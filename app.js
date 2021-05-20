const fs = require("fs");

// menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello world secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan string ke file (asynchronous)
fs.writeFile("data/test.txt", "Hello world secara asynchronous", (e) => {
  console.log(e);
});
