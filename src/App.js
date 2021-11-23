import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import AuthContext from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <AppRoutes />
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;
