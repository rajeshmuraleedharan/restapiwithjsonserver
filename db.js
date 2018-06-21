
const generatePersonModule = require('./createdata/person');
var firstRoute  = require(__dirname + '/json/employees.json');
// var secondRoute = require(__dirname + '/createdata/person.js');
// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

module.exports = function() {
return {
    employees: firstRoute,
    persons  : generatePersonModule.generatePersons()
   // persons : generatePersonModule.generatePerson
// and so on
}
}