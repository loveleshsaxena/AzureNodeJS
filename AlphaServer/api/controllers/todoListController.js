'use strict';

var fs = require('fs');

exports.list_all_tasks = function(req, res) {
fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);

        res.json(contents);
});
};


exports.push_new_entry = function(req, res) {
if(!req.body.clientName) {
    return res.status(400).send({
      success: 'false',
      message: 'clientName is required'
    });
  } else if(!req.body.sshCount) {
    return res.status(400).send({
      success: 'false',
      message: 'sshCount is required'
    });
  }

var fileContent = req.body.clientName+","+req.body.sshCount+"\r\n"

fs.readFile('DATA', 'utf8', function(erro, contents) {
if(erro) {
        return console.log(erro);
    }
else {
if(contents.includes(req.body.clientName)){
 console.log("The file already have this client name!");
var line = contents.split("\r\n");
var lineToUpdate = "";
for (var i = 0; i < line.length-1; i++) {
if (line[i].includes(req.body.clientName)) {
var lineArray = line[i].split(",");
var savedClientName = lineArray[0]
var savedSshCount = lineArray[1]
var newSshCount = parseInt(savedSshCount, 10)+parseInt(req.body.sshCount, 10)
var newfileContent = savedClientName+","+newSshCount+"\r\n"
lineToUpdate = lineToUpdate + newfileContent
}
else {
lineToUpdate = lineToUpdate + line[i] + "\r\n"
}
}
fs.writeFile('DATA', lineToUpdate, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was updated!");
});
}
else {
fs.appendFile('DATA', fileContent, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
}
}
});

return res.status(201).send({
   success: 'true',
   message: 'data added successfully',
 })
};