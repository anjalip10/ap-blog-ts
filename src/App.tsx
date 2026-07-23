
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import NotFound from './components/NotFound';
import BlogDetails from './components/BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
