var fs = require('fs');

fs.writeFile('myNewTextFile1.txt', 'Hello content!!! Creating this text file using writeFile as a part of Node File Module learning..', function (err) {
  if (err) throw err;
  console.log('Saved!');
});