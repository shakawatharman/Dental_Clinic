import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Appointment from './components/Appointment/Appointment';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Home/Banner/Banner';
import Login from './components/Login/Login';
import Pricing from './components/Pricing/Pricing';
import Register from './components/Register/Register';
import Suggestion from './components/Suggestion/Suggestion';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
      <Header></Header>
      <Banner></Banner>
      <Register></Register>
      <Login></Login>
      
      <FAQ></FAQ>
     
      <Suggestion></Suggestion>
      <Pricing></Pricing>
      <Appointment></Appointment>
     <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
