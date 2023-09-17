//import sequential-ids package to generate unique identifiers to use it for notes
const sequential = require("sequential-ids");

//create ids contain of 3 digits starting from 001
const generator = new sequential.Generator({
  digits: 3,
  restore: "000",
});

//start function to generate
generator.start();

//export to use it in controller
module.exports = generator;
