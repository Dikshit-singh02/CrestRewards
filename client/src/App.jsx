import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/layout/NavigationBar/NavigationBar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;