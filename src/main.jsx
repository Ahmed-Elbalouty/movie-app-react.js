import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieInfo from './pages/movie-info/MovieInfo.jsx';
import HomePage from './pages/home/HomePage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieInfo />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
