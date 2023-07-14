import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Products from "./pages/Products"
import SignIn from "./pages/SignIn";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    < >
     <Router>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/profile"element={<Profile/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/sign-in"element={<SignIn/>}/>
        <Route path="/sign-up"element={<SignUp/>}/>
        <Route path="/services"element={<Services/>}/>
        <Route path="/forgot-password"element={<ForgotPassword/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
