
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import DeliveryAddress from './Components/DeliveryAddress/DeliveryAddress';
import Thankyou from './Components/Thankyou/Thankyou';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<DeliveryAddress />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
