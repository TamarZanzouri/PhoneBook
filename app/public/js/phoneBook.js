var PhoneBookApp = angular.module("PhoneBook", []);
var domain = "http://127.0.0.1:8080/"

var model = {
	user : "Tamar"
}

PhoneBookApp.run(function($http){

});

PhoneBookApp.controller('MenuCtrl',['$scope', '$http',
	function($scope, $http){
	$scope.contacts = model;

	//on import click get all contacts from server
	$scope.getAllContacts = function(actionTextBookId){
		// console.log(actionTextBookId) 
		$http.get(domain + "getAllContacts" ).success(function(data){
			console.log(data)
			$scope.contacts.items = data;
		});
	}
	//on submit put all fields in a object and sent it to server for insert to json array
	$scope.submit = function() {
		var newContact = {};
		newContact.firstName = $scope.firstName;
		if($scope.lastName)
			newContact.lastName = $scope.lastName;
		else
			newContact.lastName = "";
		newContact.phoneNumber = $scope.phoneNumber;
		if($scope.other)
			newContact.other = $scope.other;
		else
			newContact.other = "";
		console.log(newContact)
		var newContactJson = JSON.stringify(newContact, null, 2)
		console.log(newContactJson)
		$http.get(domain + "addNewContact/" + newContactJson).success(function(data){
			console.log(data)
			$scope.contacts.items = data;
		});
      };
     //on export click create a file and export all contacts
	$scope.exportContactsToFile = function(){
		$http.get(domain + "writeAllContactsToFile").success(function(data){
			console.log(data)
			alert(data);
		});
	}
}]);