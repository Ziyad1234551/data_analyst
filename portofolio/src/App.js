import './App.css';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Project/>
   </div>
  );
}

export default App;
