import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./Screens/Homepage";


function App() {
  return (
    <BrowserRouter>
     <Homepage />
    </BrowserRouter>
  );
}

export default App;
