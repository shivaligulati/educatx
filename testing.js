var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyshueV3DkDUSrR7'}).base('appxrsEGJRMr48JdX');

base('students').find('recBBerOW1xQqu7Xs', function(err, record) {
    if (err) { console.error(err); return; }
    console.log('Retrieved', record.id);
});