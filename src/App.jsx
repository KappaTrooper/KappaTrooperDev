import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';    
import Navbar from './components/Navbar';
import Home from './Pages/Home';

const App = () => {
    return (
    <main className ="bg-slate-300">
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/> */}

            </Routes>
        </Router>
    </main>
    );
}


export default App;