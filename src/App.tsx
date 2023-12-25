import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactForm from './components/ContactForm.tsx';
import ContactList from './components/ContactList.tsx';
import Navbar from './components/Navbar.tsx';

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
}

export default App;
