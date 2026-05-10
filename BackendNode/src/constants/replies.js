    export const greetingsEnglish = () => `
    Hello 👋

    Welcome to *SeaRide Adventures* 🌊🏖️

    We offer exciting water sports activities at *Baga Beach, Goa* 😊

    ✨ Available Activities:
    🏍️ Jet Ski  
    🪂 Parasailing  
    🍌 Banana Ride  
    🤿 Scuba Diving 

    How may we assist you today?

    1️⃣ View Prices  
    2️⃣ Check Availability  
    3️⃣ Book an Activity  
    4️⃣ Get Location Details
    `;

    export const greetingsHindi=()=>`
    नमस्कार 👋

    _सीराइड एडवेंचर्स_ कडे तुमचें येवकार 🌊🏖️

    आमी _बागा बीच, गोवा_ हांगा रोमांचक वॉटर स्पोर्ट्स एक्टिविटी दिवपाची वेवस्था करतात 😊

    ✨ उपलब्ध एक्टिविटी:
    🏍️ जेट स्की  
    🪂 पैरासेलिंग  
    🤿 स्कूबा डायव्हिंग  
    🍌 बनाना राइड  

    आयज आमी तुमची कसली मदत करूं येतात?

    1️⃣ दर पळोवचे  
    2️⃣ उपलब्धता तपासचे  
    3️⃣ एक्टिविटी बुक करचे  
    4️⃣ लोकेशनाची माहिती मेळोवची
    `;

    export const greetingsKonkani=()=>`
    Namaskar 👋

    SeaRide Adventures kade tumchem yevkar 🌊🏖️

    Ami Baga Beach, Goa hanga romanchak water sports activity divpachi vevastha kortat 😊

    ✨ Uplabdh Activity:
    🏍️ Jet Ski  
    🪂 Parasailing  
    🤿 Scuba Diving  
    🍌 Banana Ride  

    Aiz ami tumchi kosli madot koru yetat?

    1️⃣ Kimatichi mahiti diat  
    2️⃣ Available asa te polloiche  
    3️⃣ Activity book korche  
    4️⃣ Locationachi mahiti mellovchi
    `;
    export const businessInfo = `
    Business Name: SeaRide Adventures

    Location:
    Baga Beach, Goa

    Available Activities:
    - Jet Ski
    - Parasailing
    - Banana Ride

    Pricing:
    - Jet Ski: ₹500 per ride
    - Parasailing: ₹1200 per person
    - Banana Ride: ₹700 per person

    Business Hours:
    9 AM to 6 PM

    Safety Features:
    - Life jackets provided
    - Certified instructors available

    Booking:
    Customers can book activities through WhatsApp.

    Important Rules:
    - Only answer questions related to SeaRide Adventures.
    - Politely refuse unrelated questions.
    `;


    export const chooseLanguage = () => `
    Hello 👋 Welcome to *SeaRide Adventures* 🌊

    Please select your preferred language:

    1️⃣ Konkani 
    2️⃣ हिंदी (Hindi)  
    3️⃣ English
    `;


export  const getLocationReply = (language) => {
  if (language === "hindi") {
    return `
📍 हमारी लोकेशन:

SeaRide Adventures
Baga Beach, Goa 🌊🏖️

नीचे दिए गए Google Maps लिंक पर क्लिक करें 😊
`;
  }

  if (language === "konkani") {
    return `
📍 Amchi Location:

SeaRide Adventures
Baga Beach, Goa 🌊🏖️

Google Maps linkacher click korat 😊
`;
  }

  return `
📍 Our Location:

SeaRide Adventures
Baga Beach, Goa 🌊🏖️

Click the Google Maps link below 😊
`;
};