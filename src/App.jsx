import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';    
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {
    return (
    <main className ="bg-slate-300">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>

            </Routes>
        </Router>
    </main>
    );
}


export default App;