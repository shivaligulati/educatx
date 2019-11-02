const base = require('airtable').base('appHwOcc5IjdkQTJO');
const axios = require('axios');
	module.exports = function(context, cb) {
	};
var airtable_write_endpoint = 
    axios
    .post(airtable_write_endpoint, {
         fields: {
          Email: context.body.email,
          Name: context.body.name,
          Subject: context.body.subject,
          Message: context.body.message
        }
    })
    .then(function(response) {
    console.log(response);
        })
        .catch(function(error) {
        console.log(error);
    });