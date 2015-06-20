var todoApp = angular.module("PhoneBook", []);
var domain = "http://127.0.0.1:8080/"

var model = {
	user : "Tamar"
}

todoApp.run(function($http){
	// $http.get(domain + "getAllBestSellersBooks").success(function(data){
		// model.items = data;
	// 	console.log(model.items)
	// });

});

todoApp.controller('MenuCtrl',['$scope', '$http',
	function($scope, $http){
	$scope.contacts = model;

	$scope.getAllContacts = function(actionTextBookId){
		// console.log(actionTextBookId) 
		$http.get(domain + "getAllContacts" ).success(function(data){
			console.log(data)
			$scope.contacts.items = data;
		});
	}

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

	$scope.exportContactsToFile = function(){
		// console.log(actionTextMonth) 
		$http.get(domain + "writeAllContactsToFile").success(function(data){
			console.log(data)
			alert(data);
		});
	}
}]);