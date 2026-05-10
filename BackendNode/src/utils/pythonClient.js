// export const translateToKonkani = async (text) => {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/translate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ text }),
//     });

//     if (!response.ok) {
//       const errText = await response.text();
//       throw new Error(`Python backend error: ${errText}`);
//     }

//     const data = await response.json();
//     return data.konkani;
//   } catch (error) {
//     console.error("Error calling Python backend:", error);
//     return text; // fallback
//   }
// };

export const translateToKonkani = async (text) => {

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/translate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          text
        })
      }
    );

    const data = await response.json();

    return data.konkani;

  } catch (error) {

    console.log(error);

    return text;
  }
};