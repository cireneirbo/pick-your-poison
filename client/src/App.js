import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { Link, Routes, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
            <Nav.Link> <Link to="/about">About</Link> </Nav.Link>
            <Nav.Link> <Link to="/users">Users</Link> </Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route Path="/" Component={Home}></Route>
          <Route Path="/about" Component={About}></Route>
          <Route Path="/users" Component={Users}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
