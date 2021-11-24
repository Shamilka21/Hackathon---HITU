import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import AuthContext from "./contexts/AuthContext";
import HouseContext from "./contexts/HouseContext";

function App() {
  return (
    <HouseContext>
      <BrowserRouter>
        <AuthContext>
          <AppRoutes />
        </AuthContext>
      </BrowserRouter>
    </HouseContext>
  );
}

export default App;
