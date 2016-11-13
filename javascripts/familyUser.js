"use strict";

var FamilyMembers = (function(oldFamily){

	oldFamily.getFamily = function(apiKeys, uid){
		return new Promise((resolve, reject)=>{
			$.ajax({
				method: 'GET',
				url: `${apiKeys.databaseURL}/family.json?orderBy="uid"&equalTo="${uid}"`
			}).then((response)=>{
				let family = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					family.push(response[key]);
				});

				resolve(family);
			}, (error)=>{
				reject(error);
			});
		});
	};

	oldFamily.addFamily = function(apiKeys, newFamily){
		return new Promise((resolve, reject)=>{
			$.ajax({
				method: 'POST',
				url: `${apiKeys.databaseURL}/family.json`,
				data: JSON.stringify(newFamily), 
				dataType:'json'
			}).then((response)=>{
				console.log("response from POST", response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};

	oldFamily.deleteFamily = function(apiKeys, familyId){
		return new Promise((resolve, reject)=>{
			$.ajax({
				method: 'DELETE',
				url: `${apiKeys.databaseURL}/family/${familyId}.json`,
			}).then((response)=>{
				console.log("response from DELETE", response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};


	return oldFamily;

})(FamilyMembers || {});