  import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { AuthProvider, useAuth } from './AuthContext';
  import LoginForm from './components/LoginForm';
  import RegistrationForm from './components/RegistrationForm';
  import Start from './components/Start';
  import Home from './components/Home';
  import Chords from './components/Chords';
  import Navigation from './components/Navbar';
  import Articles from './components/Articles'
  import Lessons from './components/Lessons';
  import Premium from './components/Premium';
  import Profile from './components/Profile';

  const PrivateRoute = ({ element }) => {
    const { user } = useAuth();
  
    if (!user) {
      // Wyświetl Toast o błędzie i przekieruj użytkownika na stronę główną
      toast.error('Musisz być zalogowany, aby uzyskać dostęp.');
      return <Navigate to="/" />;
    }
  
    return element;
  };

  const App = () => {
    return (
      <AuthProvider>
        <Router>
          <div>
          <ToastContainer />
            <Navigation />
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/users/login" element={<LoginForm />} />
              <Route path="/users/register" element={<RegistrationForm />} />
              <Route path="/home" element={<PrivateRoute element={<Home />} />} />
              <Route path="/chords" element={<PrivateRoute element={<Chords />} />} />
              <Route path="/articles" element={<PrivateRoute element={<Articles />} />} />
              <Route path="/lessons" element={<PrivateRoute element={<Lessons />} />} />
              <Route path="/premium" element={<PrivateRoute element={<Premium />} />} />
              <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    );
  };

  export default App;