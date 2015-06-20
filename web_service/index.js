var express = require('express');
var app = express();
var Contacts = require('./contacts_ws');

app.get('/', function(req, res){
	res.status(200).send("phone book");
})

app.get('/getAllContacts', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	res.json(Contacts.getAllContacts())
})

app.param('contact', function(req, res, next, value){
	console.log("\nrecived book id: " + value);
	next();
})

app.get('/addNewContact/:contact', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	var contactToAdd = req.params.contact;
	console.log(contactToAdd)
	var newContactList = Contacts.addNewContact(contactToAdd)
	res.json(newContactList)
})

app.get('/writeAllContactsToFile', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	app.set('json spaces', 4);
	res.set("Content-Type", "appliction/json");
	var result = Contacts.writeAllContactsToFile()
	console.log("result", result)
	res.json(result)
})



var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("listenting to port " + port);
})