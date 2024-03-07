import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./componenets/pages/HomePage";
import LoginPage from "./componenets/pages/LoginPage";
import ProfilePage from "./componenets/pages/ProfilePage";
import RegistrationPage from "./componenets/pages/RegistrationPage";
import PrivateRoutes from "./eoutes/PrivateRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/me" element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
