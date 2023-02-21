import { Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          index
          element={(
            <AuthLayout>
              <Home />
            </AuthLayout>
          )}
        />
      </Route>
    </Routes>
  );
}

export default App;
