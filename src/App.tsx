import "./App.css";
// import Home from "./pages/home";
// import Home from "./pages/home";
// import Login from "./pages/login";

import Providers from "./providers";
import { AlLRoutes } from "./router/routes";

function App() {
  return (
    <Providers>
      <AlLRoutes />
    </Providers>
  );
}

export default App;
