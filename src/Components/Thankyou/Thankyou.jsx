import React from 'react'
import './Thankyou.css'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="thankyou">
      <div className="container-info">
        <h2>डिलीवरी जानकारी:</h2>
        <p>
          आपका पवित्र प्रसाद आपके पास आ रहा है! हमें उम्मीद है कि यह अगले 10 दिनों के भीतर आपके दरवाजे तक पहुँच जाएगा। 
          हमारी टीम आपके ऑर्डर को सावधानीपूर्वक तैयार कर रही है ताकि यह वैष्णो देवी के आशीर्वाद के साथ पहुंचे।
        </p>
      </div>
      <div className="container-info">
        <h2>क्या आपको सहायता चाहिए?</h2>
        <p>
          यदि आपके ऑर्डर से संबंधित कोई प्रश्न या चिंता है, तो हमारी समर्पित ग्राहक सहायता टीम से संपर्क करें।
        </p>
        <p>
          ईमेल:
          <a href="mailto:neerajkumar1997.dsa@gmail.com">    neerajkumar1997.dsa@gmail.com</a>
        </p>
        <p>
          फोन: <a href="tel:7056330417">   7056330417</a>
        </p>
      </div>
      <div className="container-info">
        <h2>अपनी आध्यात्मिक यात्रा जारी रखें:</h2>
        <p>
          जब तक आप प्रतीक्षा कर रहे हैं, क्यों न हमारी वेबसाइट पर और पवित्र प्रसाद देखें? 
          अपनी आध्यात्मिक यात्रा जारी रखने के लिए नीचे दिए गए बटन पर क्लिक करें:
        </p>
        <Link style={{ textDecoration: "none" }} to="/Services">
          <div className="order-now-btn-1">होम पेज पर वापस जाएं</div>
        </Link>
      </div>
    </div>
  );
}

export default Thankyou;
