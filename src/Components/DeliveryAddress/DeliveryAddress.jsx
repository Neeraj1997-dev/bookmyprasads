import React, {useState} from 'react'
import './DeliveryAddress.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {


    const navigate = useNavigate();

    const [data, SetData] = useState({
      name: "",
      email:"",
      address:"",
      state:"",
      pin:"",
      phone:"",
    });

    const{name, email, address, state, pin, phone} = data

    const handleChange = e => {
      SetData({ ...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) =>{
    e.preventDefault();

    try{
      const response = await fetch('https://v1.nocodeapi.com/neeraj/google_sheets/NjrVMaysupEnxHBN?tabId=Sheet1',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name,email,address,state,pin,phone, new Date().toLocaleString()]])
      });
      await response.json()
      SetData({ ...data,name:"",email:"",address:"",state:"",pin:"",phone:""})
      navigate("/thankyou");

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>अपना पता दर्ज करें</h1>
        <div className="loginsignup-fields">
          <input
            name="name"
            type="text"
            placeholder="आपका नाम"
            value={name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="ईमेल पता"
            value={email}
            onChange={handleChange}
          />
          <input
            name="address"
            type="text"
            placeholder="आपका पता"
            value={address}
            onChange={handleChange}
          />
          <input
            name="state"
            type="text"
            placeholder="आपका राज्य"
            value={state}
            onChange={handleChange}
          />
          <input
            name="pin"
            type="number"
            placeholder="पिन कोड"
            value={pin}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            placeholder="फ़ोन नंबर"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <Link style={{ textDecoration: "none" }} to="/thankyou">
          <button onClick={handleSubmit}>बुक करें</button>
        </Link>
      </div>
    </div>
  );
  
}

export default DeliveryAddress
