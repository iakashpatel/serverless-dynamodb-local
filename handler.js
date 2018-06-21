'use strict';
const AWS = require('aws-sdk');

// offline-ready dynamoDB
const dynamoDB = new AWS.DynamoDB({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
})

module.exports.hello = (event, context, callback) => {
  const params = {
    Item: {
     "email": {
       S: "abc@gmail.com"
      },
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "usersTable"
  };

  dynamoDB.putItem(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'insert',
        input: data,
      }),
    };
      callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.get = (event, context, callback) => {
  var params1 = {
    TableName: "usersTable"
  };
 dynamoDB.scan(params1, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'get',
        input: data,
      }),
    };
      callback(null, response);
 });
};
