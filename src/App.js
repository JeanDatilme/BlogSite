import './App.css';
import { Routes, Route } from 'react-router-dom';
import Blogs from './Components/Blogs';
import HomePage from './Components/HomePage';
import Users from './Components/Users';
import Navigation from './Components/Navigation';
import Blog from './Components/Blog';


function App() {

  return (
    <>
      <div className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blog/" element={<Blog/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;