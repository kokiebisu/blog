const sendgrid = require("@sendgrid/mail")
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const buildContent = ({ content }) => {
  return `
      <div>
        ${content}
      </div>
  `
}

exports.handler = async (event, context, callback) => {
  try {
    if (event.method !== "POST") {
      callback(null, { status: "fail", message: "Try a POST!" })
    }

    if (event.body) {
      const { email, content } = event.body

      const data = {
        to: email,
        from: {
          email: process.env.SENDGRID_AUTHORIZED_EMAIL,
        }, // Use the email address or domain you verified above
        subject: "連絡がありました！",
        text: content,
        html: buildContent({ content }),
      }
      try {
        await sendgrid.send(data)
      } catch (err) {
        return callback(err, null)
      }

      callback(null, {
        statusCode: 200,
        message: "Email successfully sent!",
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        },
      })
    }
  } catch (err) {
    callback(err, {
      status: "fail",
      message: "There was an error",
    })
  }
}
