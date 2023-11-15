const {add}= require('./local_1')
const {add:Add}= require('./local_2')
console.log(Add(4,6),add(2,5))

//built_in_modules
const path = require("path");
console.log(path.dirname("C:/Next_Level_web_Development/ModuleNode7/index.js"))
console.log(path.parse("C:/Next_Level_web_Development/ModuleNode7/index.js"))