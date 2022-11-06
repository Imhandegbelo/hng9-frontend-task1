import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="hng9-frontend-task1/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
