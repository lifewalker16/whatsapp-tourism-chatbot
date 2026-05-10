// import askGroq from "../utils/aiClient.js";
// import { sendWhatsAppMessage } from "../utils/whatsappService.js";
// import { greetings } from "../constants/replies.js";
// import { speechToText } from "../utils/speechToText.js";

// export const handleChat = async (req, res) => {
//   const from = req.body.From;

//   try {
//     let message = req.body.Body.toLowerCase();

//     if (req.body.NumMedia > 0) {
//       const mediaType = req.body.MediaContentType0;

//       if (mediaType.includes("audio")) {
//         const audioUrl = req.body.MediaUrl0;
//         message = await speechToText(audioUrl);
//       }
//     }

//     message = message.toLowerCase();

//     let reply;
//     let mediaUrl = null;

//     if (
//       message.includes("hi") ||
//       message.includes("hello") ||
//       message.includes("hey")
//     ) {
//       reply = greetings();

//       mediaUrl = "https://res.cloudinary.com/dgzwpzcu2/image/upload/q_auto/f_auto/v1778070739/Gemini_Generated_Image_hl4ty9hl4ty9hl4t_anz828.png";
//     } else {
//       reply = await askGroq(message);
//     }

//     await sendWhatsAppMessage(
//       from.replace("whatsapp:", ""),
//       reply,
//       mediaUrl
//     );

//     res.send("OK");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Error");
//   }
// };


// import askGroq from "../utils/aiClient.js";
// import { sendWhatsAppMessage } from "../utils/whatsappService.js";
// import { greetings, chooseLanguage } from "../constants/replies.js";
// import { speechToText } from "../utils/speechToText.js";
// import { translateToKonkani } from "../utils/pythonClient.js";
// import { userLanguages } from "../constants/userLanguages.js";

// const normalize = (text = "") => text.trim().toLowerCase();

// const getSelectedLanguage = (text) => {
//   const value = normalize(text);
//   if (["1", "konkani"].includes(value)) return "konkani";
//   if (["2", "hindi", "हिंदी"].includes(value)) return "hindi";
//   if (["3", "english"].includes(value)) return "english";

//   return null;
// };

// const isGreeting = (text) => {
//   const value = normalize(text);
//   return (
//     value.includes("hi") ||
//     value.includes("hello") ||
//     value.includes("hey")
//   );
// };

// const cleanForTranslation = (text = "") => {
//   return text
//     .replace(/\*/g, "")
//     .replace(/\n\s*\n/g, "\n")
//     .replace(/[ \t]+/g, " ")
//     .split("\n")
//     .map((line) => line.trim())
//     .join("\n")
//     .trim();
// };

// export const handleChat = async (req, res) => {
//   try {
//     const from = req.body?.From;

//     if (!from) {
//       return res.status(400).json({
//         success: false,
//         error: "Missing From field",
//       });
//     }

//     let message = req.body?.Body?.trim() || "";

//     if (req.body.NumMedia > 0) {
//       const mediaType = req.body.MediaContentType0;

//       if (mediaType && mediaType.includes("audio")) {
//         const audioUrl = req.body.MediaUrl0;
//         message = await speechToText(audioUrl);
//       }
//     }

//     const lowerMessage = normalize(message);
//     const selectedLanguage = getSelectedLanguage(lowerMessage);

//     // ===== FIRST TIME USER =====
//     if (!userLanguages[from]) {
//       if (selectedLanguage) {
//         userLanguages[from] = selectedLanguage;

//         const reply =
//           selectedLanguage === "konkani"
//             ? "Konkani language selected 😊"
//             : selectedLanguage === "hindi"
//             ? "हिंदी भाषा चुनी गई 😊"
//             : "English language selected 😊";

//         await sendWhatsAppMessage(from.replace("whatsapp:", ""), reply);

//         return res.send("OK");
//       }

//       await sendWhatsAppMessage(
//         from.replace("whatsapp:", ""),
//         chooseLanguage()
//       );

//       return res.send("OK");
//     }

//     // ===== USER LANGUAGE ALREADY SELECTED =====
//     const language = userLanguages[from];
//     let reply = "";
//     let mediaUrl = null;

//     if (isGreeting(lowerMessage)) {
//       reply = greetings();

//       if (language === "konkani") {
//         reply = await translateToKonkani(cleanForTranslation(reply));
//       }
//     } else {
//       if (language === "english") {
//         reply = await askGroq(message, "english");
//       } else if (language === "hindi") {
//         reply = await askGroq(message, "hindi");
//       } else if (language === "konkani") {
//         const englishReply = await askGroq(message, "konkani");
//         reply = await translateToKonkani(cleanForTranslation(englishReply));
//       }
//     }

//     if (!reply) {
//       reply = "Please contact SeaRide Adventures for more details 😊";
//     }

//     await sendWhatsAppMessage(
//       from.replace("whatsapp:", ""),
//       reply,
//       mediaUrl
//     );

//     return res.send("OK");
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Error");
//   }
// };

// import askGroq from "../utils/aiClient.js";
// import { sendWhatsAppMessage } from "../utils/whatsappService.js";
// import {
//   chooseLanguage,
//   greetingsEnglish,
//   greetingsHindi,
//   greetingsKonkani,
// } from "../constants/replies.js";
// import { speechToText } from "../utils/speechToText.js";
// import { translateToKonkani } from "../utils/pythonClient.js";
// import { userLanguages } from "../constants/userLanguages.js";

// const normalize = (text = "") => text.trim().toLowerCase();

// const getSelectedLanguage = (text) => {
//   const value = normalize(text);

//   if (["1", "konkani"].includes(value)) return "konkani";
//   if (["2", "hindi", "हिंदी"].includes(value)) return "hindi";
//   if (["3", "english"].includes(value)) return "english";

//   return null;
// };

// const isGreeting = (text) => {
//   const value = normalize(text);
//   return (
//     value.includes("hi") ||
//     value.includes("hello") ||
//     value.includes("hey")
//   );
// };

// const cleanForTranslation = (text = "") => {
//   return text
//     .replace(/\*/g, "")
//     .replace(/\n\s*\n/g, "\n")
//     .replace(/[ \t]+/g, " ")
//     .split("\n")
//     .map((line) => line.trim())
//     .join("\n")
//     .trim();
// };

// export const handleChat = async (req, res) => {
//   try {
//     const from = req.body?.From;
//     const GREETING_IMAGE ="https://res.cloudinary.com/dgzwpzcu2/image/upload/q_auto/f_auto/v1778070739/Gemini_Generated_Image_hl4ty9hl4ty9hl4t_anz828.png";
//     if (!from) {
//       return res.status(400).json({
//         success: false,
//         error: "Missing From field",
//       });
//     }

//     let message = req.body?.Body?.trim() || "";

//     if (req.body.NumMedia > 0) {
//       const mediaType = req.body.MediaContentType0;

//       if (mediaType && mediaType.includes("audio")) {
//         const audioUrl = req.body.MediaUrl0;
//         message = await speechToText(audioUrl);
//       }
//     }

//     const lowerMessage = normalize(message);
//     const selectedLanguage = getSelectedLanguage(lowerMessage);

//     // ===== FIRST TIME USER =====
//     if (!userLanguages[from]) {
//         if (selectedLanguage) {
//           userLanguages[from] = selectedLanguage;

//           let reply = "";

//           if (selectedLanguage === "konkani") {
//             reply = greetingsKonkani();
//           } else if (selectedLanguage === "hindi") {
//             reply = greetingsHindi();
//           } else {
//             reply = greetingsEnglish();
//           }

//           await sendWhatsAppMessage(
//             from.replace("whatsapp:", ""),
//             reply,
//             GREETING_IMAGE
//           );

//           return res.send("OK");
//         }

//       await sendWhatsAppMessage(
//         from.replace("whatsapp:", ""),
//         chooseLanguage()
//       );

//       return res.send("OK");
//     }

//     // ===== USER LANGUAGE ALREADY SELECTED =====
//     const language = userLanguages[from];
//     let reply = "";
//     let mediaUrl = null;

//     if (isGreeting(lowerMessage)) {
//       reply = greetings();

//       if (language === "konkani") {
//         reply = await translateToKonkani(cleanForTranslation(reply));
//       }
//     } else {
//       if (language === "english") {
//         reply = await askGroq(message, "english");
//       } else if (language === "hindi") {
//         reply = await askGroq(message, "hindi");
//       } else if (language === "konkani") {
//         const englishReply = await askGroq(message, "konkani");
//         reply = await translateToKonkani(cleanForTranslation(englishReply));
//       }
//     }

//     if (!reply) {
//       reply = "Please contact SeaRide Adventures for more details 😊";
//     }

//     await sendWhatsAppMessage(
//       from.replace("whatsapp:", ""),
//       reply,
//       mediaUrl
//     );

//     return res.send("OK");
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Error");
//   }
// };


import askGroq from "../utils/aiClient.js";
import { sendWhatsAppMessage } from "../utils/whatsappService.js";
import {
  chooseLanguage,
  greetingsEnglish,
  greetingsHindi,
  greetingsKonkani,
  getLocationReply,
} from "../constants/replies.js";
import { speechToText } from "../utils/speechToText.js";
import { translateToKonkani } from "../utils/pythonClient.js";
import { userLanguages } from "../constants/userLanguages.js";

const GREETING_IMAGE =
  "https://res.cloudinary.com/dgzwpzcu2/image/upload/q_auto/f_auto/v1778070739/Gemini_Generated_Image_hl4ty9hl4ty9hl4t_anz828.png";

const GOOGLE_LOCATION ="https://maps.google.com/?q=Baga+Beach+Goa";


const normalize = (text = "") => text.trim().toLowerCase();

const getSelectedLanguage = (text) => {
  const value = normalize(text);

  if (["1", "konkani"].includes(value)) return "konkani";
  if (["2", "hindi", "हिंदी"].includes(value)) return "hindi";
  if (["3", "english"].includes(value)) return "english";

  return null;
};

const isGreeting = (text) => {
  const value = normalize(text);
  return (
    value.includes("hi") ||
    value.includes("hello") ||
    value.includes("hey")
  );
};

const isLocationRequest = (text) => {
  const value = normalize(text);

  return (
    value.includes("location") ||
    value.includes("address") ||
    value.includes("map") ||
    value.includes("where") ||
    value.includes("goa") ||
    value.includes("लोकेशन") ||
    value.includes("पता")
  );
};

const cleanForTranslation = (text = "") => {
  return text
    .replace(/\*/g, "")
    .replace(/\n\s*\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();
};



export const handleChat = async (req, res) => {
  try {
    const from = req.body?.From;

    if (!from) {
      return res.status(400).json({
        success: false,
        error: "Missing From field",
      });
    }

    let message = req.body?.Body?.trim() || "";

    if (req.body.NumMedia > 0) {
      const mediaType = req.body.MediaContentType0;

      if (mediaType && mediaType.includes("audio")) {
        const audioUrl = req.body.MediaUrl0;
        message = await speechToText(audioUrl);
      }
    }

    const lowerMessage = normalize(message);
    const selectedLanguage = getSelectedLanguage(lowerMessage);

    // ===== FIRST TIME USER =====
    if (!userLanguages[from]) {
      if (selectedLanguage) {
        userLanguages[from] = selectedLanguage;

        let reply = "";

        if (selectedLanguage === "konkani") {
          reply = greetingsKonkani();
        } else if (selectedLanguage === "hindi") {
          reply = greetingsHindi();
        } else {
          reply = greetingsEnglish();
        }

        await sendWhatsAppMessage(
          from.replace("whatsapp:", ""),
          reply,
          GREETING_IMAGE
        );

        return res.send("OK");
      }

      await sendWhatsAppMessage(
        from.replace("whatsapp:", ""),
        chooseLanguage()
      );

      return res.send("OK");
    }

    // ===== USER LANGUAGE ALREADY SELECTED =====
    const language = userLanguages[from];
    let reply = "";
    let mediaUrl = null;

    if (isGreeting(lowerMessage)) {
      if (language === "english") {
        reply = greetingsEnglish();
      } else if (language === "hindi") {
        reply = greetingsHindi();
      } else {
        reply = greetingsKonkani();
      }

      mediaUrl = GREETING_IMAGE;
    }else if(isLocationRequest(lowerMessage)){
        reply = `${getLocationReply(language)}

        ${GOOGLE_LOCATION}`;
    }
    else {
      if (language === "english") {
        reply = await askGroq(message, "english");
      } else if (language === "hindi") {
        reply = await askGroq(message, "hindi");
      } else if (language === "konkani") {
        const englishReply = await askGroq(message, "konkani");
        reply = await translateToKonkani(cleanForTranslation(englishReply));
      }
    }

    if (!reply) {
      reply = "Please contact SeaRide Adventures for more details 😊";
    }

    await sendWhatsAppMessage(
      from.replace("whatsapp:", ""),
      reply,
      mediaUrl
    );

    return res.send("OK");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
};