const fs = require('fs');
const config = require('../config');

exports.get_history = (req, res) => {
    let fileData = fs.readFileSync(config.settings.historyFile);
    let data = [];
    
    if (fileData.length > 0) {
        data = JSON.parse(fileData);    
    }
    
    res.status(200);
    res.send(data);
};

exports.save_history = (req, res) => {
    let existingData = [];
    let fileData = fs.readFileSync(config.settings.historyFile);
    
    if (fileData.length > 0) {
        existingData = JSON.parse(fileData);
    }
    
    let dataForSave = req.body;
    existingData.push(dataForSave);

    let sortedData = existingData.sort((a, b) => a.dateOfSearch - b.dateOfSearch);
    let stringJson = JSON.stringify(sortedData);

    fs.writeFileSync(config.settings.historyFile, stringJson, {flag: 'w', encoding: 'utf8'});

    res.send({success: true});
};