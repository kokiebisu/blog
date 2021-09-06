const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = async (event, context, callback) => {
  console.log("ENTERED", event)
  try {
    if (event.httpMethod !== "POST") {
      callback(null, { status: "fail", message: "Try a POST!" })
    }

    if (event.body) {
      const { email, content } = JSON.parse(event.body)

      const data = {
        to: email,
        from: {
          email: process.env.SENDGRID_AUTHORIZED_EMAIL,
        }, // Use the email address or domain you verified above
        subject: "連絡がありました！",
        text: content,
        html: `
          <div>
            ${content}
          </div>
        `,
      }
      try {
        await sendgrid.send(data)
      } catch (err) {
        return callback(err, null)
      }

      callback(null, {
        statusCode: 200,
        headers: {
          my_header: "my_value",
        },
        body: JSON.stringify({
          message: "Email successfully sent!",
        }),
        isBase64Encoded: false,
      })
    }
  } catch (err) {
    callback(err, {
      status: "fail",
      message: "There was an error",
    })
  }
}
