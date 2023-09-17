//import memorystorage package to use it in creating storage for application
const MemoryStorage = require("memorystorage");

//create store for note-app
let store = new MemoryStorage("note-app");

//function to get keys of items in store of note-app
exports.getKeys = (store) => {
  let keys = [];
  for (let i = 0; i < store.length; i++) {
    let key = store.key(i);
    keys.push(key);
  }
  return keys;
};

//function to get items in store of note-app
exports.getValues = (store) => {
  let values = [];
  for (let i = 0; i < store.length; i++) {
    let key = store.key(i);
    let value = store.getItem(key);
    values.push(value);
  }
  return values;
};

//export store to use it in controller
exports.store = store;
