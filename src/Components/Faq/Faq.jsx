import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState([]);

  const toggleAnswer = (index) => {
    setShowAnswer((prev) => {
      const newShowAnswer = [...prev];
      newShowAnswer[index] = !newShowAnswer[index];
      return newShowAnswer;
    });
  };

  const faqData = [
    {
      question: "प्रसाद बुक करें क्या है?",
      answer:
        "प्रसाद बुक करें एक ऐसा प्लेटफॉर्म है जो वैष्णो देवी का पवित्र प्रसाद सीधे आपके द्वार तक पहुंचाता है, ताकि आप दिव्य आशीर्वादों से जुड़ सकें।",
    },
    {
      question: "ऑर्डर करने की प्रक्रिया कैसे काम करती है?",
      answer:
        "ऑर्डर करना बहुत आसान है! हमारे प्रसाद विकल्पों को ब्राउज़ करें, अपनी पसंद का चयन करें और चेकआउट करें। डिलीवरी विवरण प्रदान करने के लिए चरणों का पालन करें, और बस हो गया!",
    },
    {
      question: "क्या प्रसाद शुद्ध और प्रमाणिक है?",
      answer:
        "बिल्कुल। हम अपने प्रसाद की शुद्धता सुनिश्चित करने में गर्व महसूस करते हैं। हर पैक को भक्ति और उच्चतम मानकों के साथ तैयार किया जाता है।",
    },
    {
      question: "डिलीवरी का समय कितना होता है?",
      answer:
        "हम आपके ऑर्डर की तारीख से 10 दिनों के भीतर प्रसाद डिलीवर करने का प्रयास करते हैं। अधिक जानकारी के लिए हमारी डिलीवरी जानकारी देखें।",
    },
    {
      question: "क्या मैं अपना ऑर्डर ट्रैक कर सकता/सकती हूँ?",
      answer:
        "हाँ, बिल्कुल! एक बार जब आपका ऑर्डर भेज दिया जाएगा, तो आपको एक ट्रैकिंग लिंक प्राप्त होगा जिससे आप अपने पवित्र प्रसाद की प्रगति को मॉनिटर कर सकते हैं।",
    },
    {
      question: "मैं ग्राहक सहायता से कैसे संपर्क कर सकता/सकती हूँ?",
      answer:
        "आप हमारी समर्पित ग्राहक सहायता टीम से ईमेल के माध्यम से संपर्क कर सकते हैं: bookmyparsad@gmail.com या फोन पर: 6207429257। हम आपकी सहायता के लिए हमेशा तैयार हैं।",
    },
    {
      question: "क्या मेरी जानकारी सुरक्षित है?",
      answer:
        "हाँ, आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। हम यह सुनिश्चित करने के लिए इंडस्ट्री-स्टैंडर्ड सुरक्षा उपायों का उपयोग करते हैं कि आपकी जानकारी पूरी तरह से गोपनीयता के साथ संभाली जाए।",
    },
    {
      question: "क्या कोई छूट या प्रमोशन उपलब्ध है?",
      answer:
        "हमारी वेबसाइट और सोशल मीडिया चैनलों पर विशेष ऑफर्स और प्रमोशन के लिए नजर रखें। साथ ही, सोशल मीडिया पर अपना अनुभव साझा करने पर आपको अगले ऑर्डर पर 10% की छूट मिलेगी।",
    },
    {
      question: "क्या मैं अपना ऑर्डर कैंसिल या संशोधित कर सकता/सकती हूँ?",
      answer:
        "ऑर्डर को ऑर्डर देने के 24 घंटे के भीतर संशोधित या रद्द किया जा सकता है। इसके बाद, ऑर्डर प्रोसेस हो जाता है और इसे बदला नहीं जा सकता।",
    },
  ];

  return (
    <div>
      <h2 className="faq-heading">अक्सर पूछे जाने वाले प्रश्न</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <div className={`key-down ${showAnswer[index] ? "rotate" : ""}`}>
                &#9660;
              </div>
            </div>
            <div className={`faq-answer ${showAnswer[index] ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
