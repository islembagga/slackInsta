var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
	console.log("in my controller ...");

	$scope.newMessage = {};
	$scope.newGroup = {};
	$scope.newUser = {};
	$scope.clickedMessage = {};
	$scope.clickedUser = {};
	$scope.clickedGroup = {};

	$scope.messages = [
		{user:"user1", text:"bonjour c est mon premier message"},
		{user:"user2", text:"bonjour c est mon deuxieme message"},
	];

	$scope.users = [
		{name:"islem", fname:"bagga", email:"islem.bagga@gmail.com"},
		{name:"user", fname:"f user", email:"f.user@gmail.com"}
	];

	$scope.groups = [
	{idgroup:1, namegroup:"crm"},
	{idgroup:2, namegroup:"slack"},
	{idgroup:3, namegroup:"general"}
	];

	$scope.saveMessage = function(){
		$scope.messages.push($scope.newMessage);
		$scope.newMessage = {};
	}

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};

	$scope.saveGroup = function(){
		$scope.groups.push($scope.newGroup);
		$scope.newGroup = {};
	};

	$scope.selectMessage = function(message){
		$scope.clickedMessage = message;
	}

	$scope.selectUser = function(user){
		$scope.clickedUser = user;
	};

	$scope.selectGroup = function(group){
		$scope.clickedGroup = group;
	};
});