import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import Features from "./pages/Resources";
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Login from './pages/Login';
import Resources from './pages/Resources';
import Logout from './pages/Logout';
import Health from './pages/Health';







function App() {
  
  return (
    < >
    
     <Router>
    
      <Header />
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/features"element={<Features/>}/>
        <Route path = "/resources"element={<Resources/>}/>
        <Route path = "/logout"element={<Logout/>}/>
        <Route path="/forgot-password"element={<ForgotPassword/>}/>
        <Route path = "/health"element={<Health/>}/>
      </Routes>
     </Router>
    
    </>
  );

}

export default App;