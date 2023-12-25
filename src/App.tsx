import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<ContactList/>}/>
          <Route path="/add" element={<ContactForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
