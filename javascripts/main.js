"use strict";

let apiKeys = {};
let uid = "";

$(document).ready(function(){

	function familyDOM(){
		FamilyMembers.addFamily(apiKeys, uid).then(function(){
			console.log("familyDOM");
		});
	}

	FamilyMembers.firebaseCredentials().then(function(keys){
		console.log("keys", keys);
		apiKeys = keys;
		firebase.initializeApp(apiKeys);
	});

	$("#addMember").on("click", function(){
		let newMember = {
			"name": $("#name").val(),
			"age": $("#age").val(),
			"gender": $("#gender").val(),
			"skills": $("#skills").val(),
			"uid": uid
		};
		FamilyMembers.addFamily(apiKeys, newMember).then(function(){
			familyDOM();
		});
	});
	
});