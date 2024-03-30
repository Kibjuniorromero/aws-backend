import e from "express";

const AWS = require("../config/aws");

const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

export const getDevices = async (req, res) => {
  const { device } = req.body;

  const params = {
    TableName: device,
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
        console.log('dispositivos listados', data);
        data.Items.forEach( item =>{
            console.log(item);
        })
    }
  });
};
