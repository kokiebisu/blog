require("dotenv").config();
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const buildContent = ({
  content,
}) => {
  return `
      <div>
        ${content}
      </div>
  `;
};

exports.handler = async (event, context, callback) => {
  // try {
  //   if (req.method !== "POST") {
  //     res.json({
  //       message: "Try a POST!",
  //     });
  //   }

  //   if (req.body) {
  //     const inJson = JSON.parse(req.body);

  //     const {
  //       email,
  //       content,
  //     } = inJson.values;

  //     const adminMsg = {
  //       to: process.env.SENDGRID_AUTHORIZED_EMAIL,
  //       from: {
  //         email: email,
  //       }, // Use the email address or domain you verified above
  //       subject: "連絡がありました！",
  //       text: content,
  //       html: buildContent({ 
  //         content
  //       }),
  //     };

  //     try {
  //       await sendgrid.send(adminMsg);
  //     } catch (err) {
  //       console.error(error);
  //       if (error.response) {
  //         return res.status(500).json({
  //           error: error.response,
  //         });
  //       }
  //     }

  //     try {
  //       await sendgrid.send(userMsg);
  //     } catch (err) {
  //       console.error(error);
  //       if (error.response) {
  //         return res.status(500).json({
  //           error: error.response,
  //         });
  //       }
  //     }

  //     res.status(200).json({
  //       message: "Email successfully sent!",
  //     });
  //   }
  // } catch (err) {
  //   return res.status(500).json({
  //     message: "There was an error",
  //     error: err,
  //   });
  // }
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: '<p>Hello world!</p>'
  }
  callback(null, response)
};

module.exports = handler;