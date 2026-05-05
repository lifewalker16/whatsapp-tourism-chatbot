import askGroq from "../utils/aiClient.js";
import { sendWhatsAppMessage } from "../utils/whatsappService.js";

export const handleChat = async (req, res) => {
  const message = req.body.Body;   // 👈 Twilio sends "Body"
  const from = req.body.From;      // 👈 sender number

  try {
   
    const aiReply = await askGroq(message);

    await sendWhatsAppMessage(from.replace("whatsapp:", ""), aiReply);

    res.send("OK"); // Twilio requires response
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }

};