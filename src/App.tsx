import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Setting from "./components/Pages/Setting";
import WhiteLIst from "./components/Pages/WhiteLIst";
import Apperance from "./components/Setting/Apperance";
import Profile from "./components/Setting/Profile";
import SingleProduct from "./components/SingleProduct";
import "./index.css";

const App = () => {

	return (
		<>
				<BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:productName" element={<SingleProduct />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="whitelist" element={<WhiteLIst />}/>
              <Route path="checkout" element={<Checkout />}/>
              <Route path="setting" element={<Setting />}>
                <Route index element={<Profile />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="apperance" element={<Apperance />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
		</>
	);
};

export default App;
