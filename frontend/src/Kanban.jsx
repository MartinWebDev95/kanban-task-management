import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} />
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
