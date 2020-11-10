const https = require('https');
const config = require('../config');

exports.ddg_result = (req, res) => {
    const query = req.params.query;
    const options = {
        host: config.settings.duckduckgoApi,
        path: `/?q=${query}&format=json`,
        method: 'GET',
        port: '443',
        headers: {
            'Content-Type': 'application/json'
          }
    };

    let data = '';
    
    const request = https.request(options, (rsp) => {
        rsp.on('data', (chunk) => {
            data += chunk;
        });
        rsp.on('end', () => {
            obj = JSON.parse(data);
            
            results = obj.RelatedTopics.map((topic) => ({
                title: topic.Text, 
                url: topic.FirstURL
            }));

            filteredResults = results.filter((topic) => topic.title !== undefined && topic.url !== undefined);

            res.status(200);
            res.send(filteredResults);
        });
    });

    request.on('error', err => {
        res.status(500);
        res.send(err);
    });

    request.end();
};