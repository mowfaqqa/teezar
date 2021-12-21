import { BrowserRouter, Route, Routes} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./Screens/Homepage";
import ProductScreen from "./Screens/ProductScreen";
import SingleProductScreen from "./Screens/SingleProductScreen";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Homepage />} /> 
      <Route path='/allproducts' element={ <ProductScreen /> } /> 
      <Route path='/product/:id' element={ <SingleProductScreen /> } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
