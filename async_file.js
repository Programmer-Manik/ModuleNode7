const fs = require('fs')
const { error } = require("console");
const fs = require("fs");
fs.readFile('./text/read.txt', "utf-8",(err,data)=>{
    if(err){
        throw error('error reading text')
    }
    console.log(data)
    fs.writeFile('./text/read.txt', data, 'utf-8',(err)=>{
        if(err){
            throw error("error writing data")
        }
    })
})