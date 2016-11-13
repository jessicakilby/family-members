"use strict";

let apiKeys = {};
let uid = "";

$(document).ready(function(){

	FamilyMembers.firebaseCredentials().then(function(keys){
		console.log("keys", keys);
		apiKeys = keys;
		firebase.initializeApp(apiKeys);
	});
	
});