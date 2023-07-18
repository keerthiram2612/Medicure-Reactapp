import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Login from './pages/Login';


function App() {
  
  return (
    < >
     <Router>
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/sign-up"element={<SignUp/>}/>
        <Route path="/services"element={<Services/>}/>
        <Route path="/forgot-password"element={<ForgotPassword/>}/>
      </Routes>
     </Router>
    
    </>
  );

}

export default App;