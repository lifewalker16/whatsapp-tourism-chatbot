import askGroq from "../utils/aiClient.js";
import { sendWhatsAppMessage } from "../utils/whatsappService.js";
import { greetings } from "../constants/replies.js";
import { speechToText } from "../utils/speechToText.js";

export const handleChat = async (req, res) => {
  const from = req.body.From;

  try {
    let message = req.body.Body.toLowerCase();

    if (req.body.NumMedia > 0) {
      const mediaType = req.body.MediaContentType0;

      if (mediaType.includes("audio")) {
        const audioUrl = req.body.MediaUrl0;
        message = await speechToText(audioUrl);
      }
    }

    message = message.toLowerCase();

    let reply;
    let mediaUrl = null;

    if (
      message.includes("hi") ||
      message.includes("hello") ||
      message.includes("hey")
    ) {
      reply = greetings();

      mediaUrl = "https://res.cloudinary.com/dgzwpzcu2/image/upload/q_auto/f_auto/v1778070739/Gemini_Generated_Image_hl4ty9hl4ty9hl4t_anz828.png";
    } else {
      reply = await askGroq(message);
    }

    await sendWhatsAppMessage(
      from.replace("whatsapp:", ""),
      reply,
      mediaUrl
    );

    res.send("OK");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};