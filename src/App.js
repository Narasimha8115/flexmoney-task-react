import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from "react-router-dom";

import AdmissionForm from './pages/admissionForm';
import PaymentPage from './pages/paymentPage';
import Header from './pages/header';
import Pay from './pages/pay';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={AdmissionForm} />
        <Route path='/paymentPage' exact component={PaymentPage} />
        <Route path='/pay' exact component={Pay}/>
        
      </Switch>
    </div>
  );
}

export default App;
