import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth} from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import {  Header }from './components/Header/Header';

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }} >
      <Router >
        <div className="App">
          {isAuthenticated && <Header />}
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
