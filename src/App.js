import Login from "./pages/auth/login";
import { Routes, Route } from "react-router-dom";
import OnboardingRoutes from "./routes/onboarding/onbording-routes";
import HomeRoutes from "./routes/dashboard/home-routes";
import { ProtectedRoute } from './config/auth-config'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<ProtectedRoute />} >
        <Route path='/onboarding/*' element={<OnboardingRoutes />} />
        <Route path='/home/*' element={<HomeRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
