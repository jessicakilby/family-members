# weather-app

## Requirements

1. Create a new Firebase application. Go to your dashboard and fill out the form. Application name should be "family", and provide a unique URL. (e.g. nss-steve-family)
1. Using Browserify, build a modular application that:
	*Reads all family members from your Firebase DB and lists them in the browser.
	*Lets you add new family members.
	*Lets you delete family members (like that annoying nephew you can't stand).
1. At the minimum, you should create the following modules:
	*Main module
	*Module that handles adding family members to Firebase
	*Module that handles deleting family members from Firebase.
	*Module that handles listing family members.
1. Use the JSON structure shown below when adding a family member. For the skills array, have a <textarea> field in your form where the user can enter in a comma-delimited list of skills that you will convert into an array.
1. Use XHR calls to handle all operations with Firebase.

## How to run
In your terminal run:
```
http-server -p 9999
```
then navigate to [here](http://localhost:9999) in your browser.

## Contributors
- [Jessica Kilby](https://github.com/jessicakilby)