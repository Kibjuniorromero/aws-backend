// const AWS = require('../config/aws.js');

import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

export const getDevices = async (req, res) => {
    console.log(device)
  const { device } = req.body;

  const params = {
    TableName: device,
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      console.log("error", err);
      res.status(500).send(err);
    } else {
        res.status(200).send(data)
      console.log("dispositivos listados", data);
      data.Items.forEach((item) => {
        console.log(item);
      });
    }
  });
};
