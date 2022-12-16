// const db = require('../models');
// const things = db.things;
const client = require("@mailchimp/mailchimp_marketing");
require('dotenv').config();

client.setConfig({
  apiKey: process.env['mchimp_api_key'],
  server: process.env['mchimp_server_prefix'],
});

// Create and Save a new thing
exports.addEmail = async (req, res) => {
    const email = req.body.email;
    try {
      const result = await client.lists.addListMember(process.env['mchimp_list_id'], {
        email_address: email,
        status: "pending",
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
};