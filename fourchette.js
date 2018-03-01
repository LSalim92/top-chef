const request = require('request');

const configuration = {
  'uri': 'https://www.m.lafourchette.com/ville/paris/415144',
  'headers': {
    'cookie': 'datadome=AHrlqAAAAAMAF4a7sY37iSUAVvJqHA=='
  }
};

request(configuration, (err, response, body) => {
  console.log(body);
});
