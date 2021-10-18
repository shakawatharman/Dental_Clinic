import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Appointment from './components/Appointment/Appointment';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Home/Banner/Banner';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Register></Register>
      <Login></Login>
      
      <FAQ></FAQ>
      <Appointment></Appointment>
     <Footer></Footer>
    </div>
  );
}

export default App;
