import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { DefaultLayout, HeaderLayout } from './components/Layout';
import Following from './pages/Following';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Search from './pages/Search';
import TiktokPage from './pages/TiktokPage';
import TodoPage from './pages/TodoPage';
import Upload from './pages/Upload';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/tiktok" element={<TiktokPage />} />
          <Route
            path="/following"
            element={
              <DefaultLayout>
                <Following />
              </DefaultLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            }
          />
          <Route
            path="/upload"
            element={
              <HeaderLayout>
                <Upload />
              </HeaderLayout>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
