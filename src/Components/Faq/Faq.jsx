// Faq.jsx

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
     question: "What is BookMyPrasad?",
     answer:
       "BookMyPrasad is a platform that delivers sacred prasad from Vaishno Devi directly to your doorstep, ensuring a spiritual connection with the divine blessings.",
   },
   {
     question: "How does the ordering process work?",
     answer:
       "Ordering is simple! Browse our prasad offerings, select your preferred variant, and proceed to checkout. Follow the steps to provide delivery details, and you're done!",
   },
   {
     question: "Is the prasad authentic and pure?",
     answer:
       "Absolutely. We take pride in ensuring the purity of our prasad. Each pack is curated with devotion, adhering to the highest standards of authenticity.",
   },
   {
     question: "What is the expected delivery time?",
     answer:
       "We aim to deliver your prasad within 10 days from the date of order. Please check our delivery information for more details.",
   },
   {
     question: "Can I track my order?",
     answer:
       "Yes, you can! Once your order is dispatched, you'll receive a tracking link to monitor the progress of your sacred prasad.",
   },
   {
     question: "How can I contact customer support?",
     answer:
       "You can contact our dedicated customer support team via email at bookmyparsad@gmail.com or by phone at 6207429257. We're here to assist you.",
   },
   {
     question: "Is my information secure?",
     answer:
       "Yes, your privacy is important to us. We employ industry-standard security measures to ensure that your information is handled with the utmost confidentiality.",
   },
   {
     question: "Are there any discounts or promotions available?",
     answer:
       "Keep an eye on our website and social media channels for special offers and promotions. We also offer a 10% discount on your next order when you share your experience on social media.",
   },
   {
     question: "Can I cancel or modify my order?",
     answer:
       "Orders can be modified or canceled within 24 hours of placement. After that period, the order is processed and cannot be altered.",
   },
 ];

  return (
    <div>
    <h2 className="faq-heading">Frequently Asked Questions</h2>
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
