import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Pricing from './components/Pricing/Pricing';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Service from './components/Service/Service';
import AuthProvider from './context/AuthProvider';
import About from './components/About/About';
import Consultation from './components/Consultation/Consultation';


function App() {
  return (
    
     <AuthProvider>
      <Router>
      <Header></Header>
      
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/pricing">
        <Pricing></Pricing>
      </PrivateRoute>
      <Route path="/faq">
        <FAQ></FAQ>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <PrivateRoute path="/consultation">
        <Consultation></Consultation>
      </PrivateRoute>
      <PrivateRoute path="/service/:serviceId">
      <Service></Service>
      </PrivateRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
      </Switch>
      
   
    
     <Footer></Footer>
      </Router>
     </AuthProvider>
    
  );
}

export default App;
