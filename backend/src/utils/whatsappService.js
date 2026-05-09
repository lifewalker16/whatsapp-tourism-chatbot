// import twilio from "twilio";
// import "dotenv/config";

// const client = twilio(
//   process.env.TWILIO_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// export const sendWhatsAppMessage = async (to, message) => {
//   try {
//     const res = await client.messages.create({
//       from: "whatsapp:+14155238886",
//       body: message,
//       to: `whatsapp:${to}`,
//     });

//     console.log("Message sent:", res.sid);
//   } catch (err) {
//     console.log("Twilio Error:", err.message);
//   }
// };

import twilio from "twilio";
import "dotenv/config";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendWhatsAppMessage = async (to, message, mediaUrl = null) => {
  try {
    const payload = {
      from: "whatsapp:+14155238886",
      body: message,
      to: `whatsapp:${to}`,
    };

    if (mediaUrl) {
      payload.mediaUrl = [mediaUrl];
    }

    const res = await client.messages.create(payload);

    console.log("Message sent:", res.sid);
  } catch (err) {
    console.log("Twilio Error:", err.message);
  }
};