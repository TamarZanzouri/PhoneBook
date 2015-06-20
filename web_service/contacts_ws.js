var fs = require('fs');
var ContactsList = JSON.parse(fs.readFileSync('data.json', 'utf8'));


//return all contacts from json file
exports.getAllContacts = function(){
	console.log(ContactsList)
	return ContactsList;
}

//insert new contact to objects array and update json file
exports.addNewContact = function(contact){
	console.log(contact)
	ContactsList.push(JSON.parse(contact))
	console.log(ContactsList)
	//update file with new contact
	fs.writeFile('data.json', JSON.stringify(ContactsList), function (err) {
	  console.log(err);
	});
	console.log("array after entering " , ContactsList)
	return ContactsList;
}

//export all contacts to a json file
exports.writeAllContactsToFile = function(){
	var path = "../../contacts.json";
	//create file if not exists and export all contacts
	fs.writeFile(path, JSON.stringify(ContactsList), function(err) {
	    if(err) {
	        return console.log(err);
	        return 1;
	    }
	    console.log("The file was saved!");
	}); 
	var result = "file was exported to " + path;
    return result;
}


