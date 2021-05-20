const fs = require("fs");

// menuliskan string ke file (synchronous)
try {
  fs.writeFileSync("data/test.txt", "Hello world secara synchronous!");
} catch (e) {
  console.log(e);
}
