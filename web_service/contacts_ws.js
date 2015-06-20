var fs = require('fs');
var ContactsList = JSON.parse(fs.readFileSync('data.json', 'utf8'));

exports.getAllContacts = function(){
	console.log(ContactsList)
	return ContactsList;
}

exports.addNewContact = function(contact){
	// var bookName = "book not found";
	// var data = JSON.parse(contact);  //parse the JSON
	console.log(contact)
	ContactsList.push(JSON.parse(contact))
	console.log(ContactsList)
	fs.writeFile('data.json', JSON.stringify(ContactsList), function (err) {
	  console.log(err);
	});
	console.log("array after entering " , ContactsList)
	// console.log(data)
	return ContactsList;
}

exports.writeAllContactsToFile = function(){
	var path = "../../contacts.json";
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


