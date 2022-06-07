import './App.css';
import Dashboard from './modules/Dashboard';
import Contact from './modules/Contact'
import Projects from './modules/Projects'
import Knowledge from './modules/Knowledge'
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
 
    <div className="App">
    <Routes>

<Route path="/" exact element={ <Dashboard /> }/>
<Route path="/knowledge" element={<Knowledge />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>

   
     
    </div>

  );
}

export default App;
