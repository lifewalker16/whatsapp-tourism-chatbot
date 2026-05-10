import { createClient } from "@deepgram/sdk";
import axios from "axios";
import "dotenv/config";

const deepgram = createClient(
  process.env.DEEPGRAM_API_KEY
);

export const speechToText = async (audioUrl) => {

  try {

    // Download audio from Twilio
    const response = await axios.get(audioUrl, {
      responseType: "arraybuffer",

      auth: {
        username: process.env.TWILIO_SID,
        password: process.env.TWILIO_AUTH_TOKEN,
      },
    });

    // Convert speech to text
    const { result, error } =
      await deepgram.listen.prerecorded.transcribeFile(
        Buffer.from(response.data),

        {
          mimetype: "audio/ogg",

          model: "nova-3",

          // Better multilingual support
          detect_language: true,

          // Prioritize these languages
          languages: ["en", "hi"],

          smart_format: true,
          punctuate: true,
          filler_words: true,

          // Improves transcript quality
          utterances: true,
        }
      );

    if (error) {
      console.log(error);
      return "";
    }

    // Extract transcript
    const transcript =
      result.results.channels[0]
      .alternatives[0]
      .transcript;

    console.log("Transcript:", transcript);

    return transcript;

  } catch (err) {

    console.log("Deepgram Error:", err);

    return "";
  }
};