var fs = require('fs');

// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['USER_ID'] = 'UK8CH2281:TKGSUQHQE';
  process.env['BOT_ID'] = 'BKGSYSTFG:TKGSUQHQE';
  process.env['HOST_URL'] = 'https://slack.botframework.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0389857f-2464-451b-ac83-5f54d565b1a7';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations', '*')
  .reply(200, {"id":"BKGSYSTFG:TKGSUQHQE:DKE8NUG92"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '45',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|6d17be79d5cb4d4b8c76c7334a771cd1.81c13e79_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:51:47 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .filteringRequestBody(function (path) { return '*';})
.post('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92/attachments', '*')
  .reply(200, {"id":"at26757-Gy3zdYy8JfY-e"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '37',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|9fdaebdefd249643be0398725a8625d1.81c13e7a_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:51:48 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .get('/v3/attachments/at26757-Gy3zdYy8JfY-e')
  .reply(200, {"name":"bot-framework.png","type":"image/png","views":[{"viewId":"original","size":8369}]}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '142',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|31cc101641c00e4f932aad6a7937fc31.81c13e7b_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:51:48 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .get('/v3/attachments/at26757-Gy3zdYy8JfY-e/views/original')
  .reply(200, () => {
    return fs.createReadStream('tests/bot-framework.png');
}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '8369',
  'Content-Type',
  'image/png',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|f4b866aae433f349a85be98b6dd3e640.81c13e7c_',
  'Content-Disposition',
  'attachment; filename=bot-framework.png; size=8369',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Wed, 19 Jun 2019 20:51:47 GMT',
  'Connection',
  'close' ]);
 return result; }]];